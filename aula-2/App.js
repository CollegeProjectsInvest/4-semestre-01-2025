import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Button(props) {
  return (
    <Text>{props.title}</Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Botao 1" />
      <Button title="Botao 2" />
      <StatusBar style="auto" />
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
});
