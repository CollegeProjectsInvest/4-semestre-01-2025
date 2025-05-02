import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

import * as theme from '../styles/theme';
import { Typography } from './typography';

export function TaskCard({ id, title, finished, onRemoveTask, onUpdateTask }) {
    return (
        <View style={styles.container}>
            <Checkbox
                style={styles.checkbox}
                value={finished}
                onChange={() => onUpdateTask(id)}
                color={finished ? theme.colors.primary : theme.colors.gray}
            />
            <Typography style={styles.title}>{title}</Typography>
            <Ionicons name="trash" color={theme.colors.red} size={theme.scale(20)} onPress={() => onRemoveTask(id)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.secondary,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing.md,
        borderRadius: theme.scale(4),
        gap: theme.spacing.md,
    },
    checkbox: {
        width: theme.scale(20),
        height: theme.scale(20),
        borderRadius: theme.scale(4),
    },
    title: {
        width: '100%',
    },
});
