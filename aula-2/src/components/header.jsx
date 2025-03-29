import { StyleSheet, View } from "react-native";

import { Typography } from "./typography";

export function Header({ title }) {
    return (
        <View style={styles.header}>
            <Typography variant='title'>{title}</Typography>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 30,
        width: '100%'
    },
})