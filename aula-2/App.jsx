import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// convencional - hook + estados
function Contador() {
  const [valor, setValor] = useState(0); // hook para controlar estados

  function adicionarValor() {
    setValor(valor + 1)
    console.log(valor);
  }

  return (
    <View>
      <Text style={styles.text}>{valor}</Text>
      <TouchableOpacity onPress={adicionarValor}>
        <Text style={styles.text}>+1</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Contador />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: "20px",
    color: "red"
  }
});
