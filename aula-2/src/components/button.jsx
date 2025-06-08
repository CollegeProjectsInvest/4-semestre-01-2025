import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

import * as theme from '../styles/theme';
import { Typography } from './typography';

export function Button({ children, asLink, onPress, loading }) {
    if (asLink) {
        return (
            <TouchableOpacity onPress={onPress}>
                <Typography variant="link">{children}</Typography>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity style={styles.button} onPress={onPress} disabled={loading}>
            {loading ? <ActivityIndicator /> : <Typography variant="button">{children}</Typography>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        padding: theme.spacing.md,
        borderRadius: theme.scale(4),
        width: '100%',
    },
});
