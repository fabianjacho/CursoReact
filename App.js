import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View  } from 'react-native';
import { getPersonajes } from './lib/rickyMorty';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-web';
import Logo from './componentes/Logo';
import { CharacterCard } from './componentes/CharacterCard';

export default function App() {
  const [personajes, setPersonajes] = useState([]);

   useEffect(() => {
    getPersonajes().then(data => {
      console.log("Personajes:", data);
      setPersonajes(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView style={{ width: '100%' }}>

        <Logo style={styles.Logo}></Logo>

      {personajes.map((personaje) => (
        <CharacterCard 
          key={personaje.id}
          personaje={personaje}
        />
      ))}
      </ScrollView>

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
    color: '#rgb(255, 131, 100)',
  },

  Logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
