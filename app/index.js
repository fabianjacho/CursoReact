import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Logo from '../componentes/Logo';
import {Main} from '../componentes/main';

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Logo style={styles.Logo} />
      <Main />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  gender: {
    fontSize: 16,
    color: 'rgb(255, 131, 100)', // Corregido: sin comillas dentro
  },
  Logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
