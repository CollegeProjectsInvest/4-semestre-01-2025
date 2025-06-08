import React, { useEffect, useState } from 'react';
import { StyleSheet, View, useWindowDimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as theme from '../styles/theme';
import { Input } from '../components/input';
import { OrDivider } from '../components/or-divider';
import { Button } from '../components/button';
import { Header } from '../components/header';
import { Container } from '../components/container';
import { useAuthContext } from '../contexts/auth-context';

export function LoginPage() {
    const { login, loading, error, user } = useAuthContext();

    const navigation = useNavigation();

    const [showPassword, setShowPassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { width: widthWindow } = useWindowDimensions();

    useEffect(() => {
        if (user) {
            navigation.navigate('tasks');
        }
    }, [user]);

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
                {error && <Text style={{ color: theme.colors.red }}>{error}</Text>}
                <Button loading={loading} onPress={async () => await login({ email, password })}>
                    Entrar
                </Button>
                <OrDivider />
                <Button asLink onPress={() => navigation.navigate('register')}>
                    Criar uma conta
                </Button>
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
