import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import * as theme from '../styles/theme';

export function Input({ icon, onClickIcon, showPassword, ...rest }) {
    if (icon) {
        return (
            <View style={styles.inputIcon}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={theme.colors.gray}
                    secureTextEntry={showPassword}
                    {...rest}
                />
                <TouchableOpacity onPress={onClickIcon}>
                    <Feather name={icon} size={15} style={styles.icon} />
                </TouchableOpacity>
            </View>
        );
    }

    return <TextInput placeholderTextColor={theme.colors.gray} style={styles.input} {...rest} />;
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: theme.colors.secondary,
        padding: theme.spacing.md,
        borderRadius: theme.scale(4),
        color: theme.colors.white,
        width: '100%',
    },
    icon: {
        color: theme.colors.white,
        position: 'absolute',
        right: theme.scale(10),
        bottom: theme.scale(15),
    },
    inputIcon: {
        width: '100%',
        position: 'relative',
    },
});
