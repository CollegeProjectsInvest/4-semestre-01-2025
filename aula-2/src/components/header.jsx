import React from 'react';
import { StyleSheet, View } from 'react-native';

import * as theme from '../styles/theme';
import { Typography } from './typography';

export function Header({ title }) {
    return (
        <View style={styles.header}>
            <Typography variant="title">{title}</Typography>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: theme.spacing.md,
        width: '100%',
    },
});
