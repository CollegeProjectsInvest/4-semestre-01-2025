import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

import * as theme from '../styles/theme';
import { Container } from '../components/container';
import { Header } from '../components/header';
import { TaskCard } from '../components/task-card';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { useTaskContext } from '../contexts/task-context';

export function TasksPage() {
    const { loading, error, tasks, createTask, deleteTask, updateTask } = useTaskContext();

    const [title, setTitle] = useState('');

    return (
        <Container>
            <Header title="Crie e organize as suas tarefas" />
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ gap: theme.spacing.md }}
                showsVerticalScrollIndicator={false}
                style={styles.listTasks}
                renderItem={({ item }) => (
                    <TaskCard
                        {...item}
                        onRemoveTask={() => deleteTask({ id: item.id })}
                        onUpdateTask={() => updateTask({ id: item.id, finished: !item.finished })}
                    />
                )}
            />
            <View style={styles.form}>
                <Input type="text" value={title} onChangeText={setTitle} placeholder="Insira o título da tarefa" />
                <Button loading={loading} onPress={() => createTask({ title })}>
                    Adicionar
                </Button>
                {error && <Text style={{ color: theme.colors.red }}>{error}</Text>}
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
