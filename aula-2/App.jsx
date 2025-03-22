import { Button, StyleSheet, Text, View } from 'react-native';
// hook - useState
import { useState } from 'react';

export default function App() {
  const [valor, setValor] = useState(0);

  function contar() {
    setValor(valor + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{valor}</Text>
      <Button title='+1' onPress={contar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem'
  },
  text: {
    fontSize: '1.2rem',
    color: "#ffff"
  }
});