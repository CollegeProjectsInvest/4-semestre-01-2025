import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import * as theme from '../styles/theme';
import { Container } from '../components/container';
import { Header } from '../components/header';
import { TaskCard } from '../components/task-card';
import { Input } from '../components/input';
import { Button } from '../components/button';

let id = 1;

export function TasksPage() {
    const [title, setTitle] = useState('');
    const [tasks, setTasks] = useState([]);

    const onCreateTask = () => {
        setTasks([
            ...tasks,
            {
                id,
                title,
                finished: false,
            },
        ]);
        id += 1;
        setTitle('');
    };

    const onRemoveTask = (id) => {
        setTasks(tasks.filter((item) => item.id !== id));
    };

    const onUpdateTask = (id) => {
        setTasks(
            tasks.map((item) => {
                if (item.id === id) {
                    item.finished = !item.finished;
                }
                return item;
            })
        );
    };

    return (
        <Container>
            <Header title="Crie e organize as suas tarefas" />
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ gap: theme.spacing.md }}
                showsVerticalScrollIndicator={false}
                style={styles.listTasks}
                renderItem={({ item }) => <TaskCard {...item} onRemoveTask={onRemoveTask} onUpdateTask={onUpdateTask} />}
            />
            <View style={styles.form}>
                <Input type="text" value={title} onChangeText={setTitle} placeholder="Insira o título da tarefa" />
                <Button onPress={onCreateTask}>Adicionar</Button>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    listTasks: {
        flex: 1,
        width: '100%',
        marginVertical: theme.spacing.sm,
    },
    form: {
        padding: theme.spacing.md,
        width: '100%',
        gap: theme.spacing.sm,
        borderTopColor: theme.colors.gray,
        borderTopWidth: theme.scale(1),
    },
});
