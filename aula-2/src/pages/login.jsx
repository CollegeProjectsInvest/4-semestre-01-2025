import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { useState } from 'react';

import { Input } from '../components/input';
import { OrDivider } from '../components/or-divider';
import { Button } from '../components/button';
import { Header } from '../components/header';
import { Container } from '../components/container';

export function LoginPage() {
    const [showPassword, setShowPassword] = useState(true);
    const { width: widthWindow } = useWindowDimensions();

    return (
        <Container>
            <Header title={"Bem-vindo!"} />
            <View style={[styles.form, { width: widthWindow < 830 ? '90%' : '60%' }]}>
                <Input placeholder='E-mail' />
                <Input
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
        gap: 15
    },
});
