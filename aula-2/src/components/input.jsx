import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'

export function Input({ placeholder, icon, onClickIcon, showPassword, onChangeText, value }) {
    if (icon) {
        return (
            <View style={styles.inputIcon}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={'#ABABAB'}
                    secureTextEntry={showPassword}
                    onChangeText={onChangeText}
                    value={value}
                />
                <TouchableOpacity onPress={onClickIcon}>
                    <Feather name={icon} size={15} style={styles.icon} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={'#ABABAB'}
            style={styles.input}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#1A1A1A',
        padding: '1rem',
        borderRadius: '0.5rem',
        color: 'white',
        width: '100%',
    },
    icon: {
        color: 'white',
        position: 'absolute',
        right: 10,
        bottom: 15
    },
    inputIcon: {
        width: '100%',
        position: 'relative',
    }
})