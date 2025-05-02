import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { useState } from 'react';

import * as theme from '../styles/theme';
import { Input } from '../components/input';
import { OrDivider } from '../components/or-divider';
import { Button } from '../components/button';
import { Header } from '../components/header';
import { Container } from '../components/container';

export function LoginPage() {
    const [showPassword, setShowPassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { width: widthWindow } = useWindowDimensions();

    return (
        <Container>
            <Header title={'Bem-vindo!'} />
            <View style={[styles.form, { width: widthWindow < 830 ? '90%' : '60%' }]}>
                <Input value={email} placeholder="E-mail" onChangeText={setEmail} />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Senha"
                    icon={showPassword ? 'eye' : 'eye-off'}
                    onClickIcon={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}
                />
                <Button>Entrar</Button>
                <OrDivider />
                <Button asLink>Criar uma conta</Button>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        gap: theme.spacing.md,
    },
});
