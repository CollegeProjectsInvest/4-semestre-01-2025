import React from 'react';
import { StyleSheet, View } from 'react-native';

import * as theme from '../styles/theme';

export function Container({ children }) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.spacing.md,
        alignItems: 'center',
    },
});
