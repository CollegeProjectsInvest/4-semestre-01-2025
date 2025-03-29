import { View } from "react-native-web";
import { StyleSheet } from "react-native";

import { Typography } from "./typography";

export function OrDivider() {
    return (
        <View style={styles.divider}>
            <View style={styles.line} />
            <Typography variant='thin'>Ou</Typography>
            <View style={styles.line} />
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#ABABAB',
        height: '1px',
        borderRadius: '1rem',
        width: '40%',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
    },
});