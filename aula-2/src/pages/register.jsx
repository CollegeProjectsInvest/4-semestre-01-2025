import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useState } from 'react';

import { Input } from '../components/input';
import { OrDivider } from '../components/or-divider';
import { Button } from '../components/button';
import { Header } from '../components/header';
import { Container } from '../components/container';

export function RegisterPage() {
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmationPassword, setShowConfirmationPassword] = useState(true);
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const { width: widthWindow } = useWindowDimensions();

    return (
        <Container>
            <Header title={"Crie uma conta."} />
            <View style={[styles.form, { width: widthWindow < 830 ? '90%' : '60%' }]}>
                <Input placeholder='E-mail' />
                <Input
                    placeholder="Senha"
                    icon={showPassword ? 'eye' : 'eye-off'}
                    onClickIcon={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <Input
                    placeholder="Confirmar sua senha"
                    icon={showConfirmationPassword ? 'eye' : 'eye-off'}
                    onClickIcon={() => setShowConfirmationPassword(!showConfirmationPassword)}
                    showPassword={showConfirmationPassword}
                    onChangeText={(text) => setConfirmationPassword(text)}
                    value={confirmationPassword}
                />
                {password !== confirmationPassword && (<Text style={{ color: "red" }}>As senhas devem ser iguais</Text>)}
                <Button>Cadastrar</Button>
                <OrDivider />
                <Button asLink>Já tenho uma conta</Button>
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
