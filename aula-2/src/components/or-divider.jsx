import React from 'react';
import { StyleSheet, View } from 'react-native';

import * as theme from '../styles/theme';
import { Typography } from './typography';

export function OrDivider() {
    return (
        <View style={styles.divider}>
            <View style={styles.line} />
            <Typography variant="thin">Ou</Typography>
            <View style={styles.line} />
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        backgroundColor: theme.colors.gray,
        height: theme.scale(1),
        borderRadius: theme.scale(4),
        width: '40%',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.md,
        width: '100%',
    },
});
