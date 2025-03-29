import { Text, StyleSheet } from "react-native";

export function Typography({ children, variant = 'default' }) {
    return <Text style={styles[variant]}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontWeight: 'bold',
        fontSize: '1.5rem',
        textAlign: 'center'
    },
    button: {
        color: 'white',
        textAlign: 'center',
        fontSize: '1.2rem'
    },
    thin: {
        color: '#ABABAB',
        fontSize: '1rem'
    },
    link: {
        color: '#ABABAB',
        textDecorationLine: 'underline'
    },
    default: {
        color: 'white',
        fontSize: '1rem',
    }
});
