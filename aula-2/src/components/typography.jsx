import React from 'react';
import { Text, StyleSheet } from 'react-native';

import * as theme from '../styles/theme';

export function Typography({ children, variant = 'default', style }) {
    return <Text style={[styles[variant], style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        color: theme.colors.white,
        fontWeight: 'bold',
        fontSize: theme.fontSize.large,
        textAlign: 'center',
    },
    button: {
        color: theme.colors.white,
        textAlign: 'center',
        fontSize: theme.fontSize.medium,
    },
    thin: {
        color: theme.colors.gray,
        fontSize: theme.fontSize.medium,
    },
    link: {
        color: theme.colors.gray,
        textDecorationLine: 'underline',
        fontSize: theme.fontSize.small,
    },
    default: {
        color: theme.colors.white,
        fontSize: theme.fontSize.medium,
    },
});
