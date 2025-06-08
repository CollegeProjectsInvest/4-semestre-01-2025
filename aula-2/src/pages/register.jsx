import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as theme from '../styles/theme';
import { Input } from '../components/input';
import { OrDivider } from '../components/or-divider';
import { Button } from '../components/button';
import { Header } from '../components/header';
import { Container } from '../components/container';
import { useAuthContext } from '../contexts/auth-context';

export function RegisterPage() {
    const { register, loading, error, user } = useAuthContext();

    const navigation = useNavigation();

    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmationPassword, setShowConfirmationPassword] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');

    const { width: widthWindow } = useWindowDimensions();

    useEffect(() => {
        if (user) {
            navigation.navigate('tasks');
        }
    }, [user]);

    return (
        <Container>
            <Header title={'Crie uma conta.'} />
            <View style={[styles.form, { width: widthWindow < 830 ? '90%' : '60%' }]}>
                <Input placeholder="E-mail" />
                <Input
                    placeholder="Senha"
                    icon={showPassword ? 'eye' : 'eye-off'}
                    onClickIcon={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}
                    onChangeText={setPassword}
                    value={password}
                />
                <Input
                    placeholder="Confirmar sua senha"
                    icon={showConfirmationPassword ? 'eye' : 'eye-off'}
                    onClickIcon={() => setShowConfirmationPassword(!showConfirmationPassword)}
                    showPassword={showConfirmationPassword}
                    onChangeText={setConfirmationPassword}
                    value={confirmationPassword}
                />
                {password !== confirmationPassword && <Text style={{ color: theme.colors.red }}>As senhas devem ser iguais</Text>}
                {error && <Text style={{ color: theme.colors.red }}>{error}</Text>}
                <Button loading={loading} onPress={async () => await register({ email, password, confirmationPassword })}>
                    Cadastrar
                </Button>
                <OrDivider />
                <Button asLink onPress={() => navigation.navigate('login')}>
                    Já tenho uma conta
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
