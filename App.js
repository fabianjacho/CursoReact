import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Button } from 'react-native';
import { getPersonajes } from './lib/rickyMorty';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';

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
      {personajes.map((personaje) => (
        <View key={personaje.id} style={{ margin: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}>
          <Image
            source={{ uri: personaje.image }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{personaje.name}</Text>
          <Text>Status: {personaje.status}</Text>
          <Text>Species: {personaje.species}</Text>
          <Text>Gender: {personaje.gender}</Text>
          <Text>Episodes: {personaje.episode.length}</Text>
          <Pressable onPress={() => console.log(`Selected: ${personaje.name}`)}>
            <Text style={{ color: 'blue', marginTop: 5 }}>Select</Text>
          </Pressable>
          <Button title="More Info" onPress={() => console.log(`More info about ${personaje.name}`)} />

        </View>
      ))}

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
