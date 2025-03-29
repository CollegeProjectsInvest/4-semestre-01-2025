import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

import { Typography } from "./typography";

export function Button({ children, asLink }) {
    if (asLink) {
        return (
            <TouchableOpacity>
                <Typography variant='link'>{children}</Typography>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity style={styles.button}>
            <Typography variant='button'>{children}</Typography>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#BB86FC',
        padding: '1rem',
        borderRadius: '0.5rem',
        width: '100%'
    },
});
