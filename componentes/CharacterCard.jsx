import { View, Text, Image, StyleSheet, Pressable, Button } from 'react-native';


export function CharacterCard({ personaje }) {
  return (
        <View key={personaje.id} style={{ margin: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}>
          <Image
            source={{ uri: personaje.image }}
            style={styles.image }
          />
          <Text style={styles.title}>{personaje.name}</Text>
          <Text>Status: {personaje.status}</Text>
          <Text>Species: {personaje.species}</Text>
          <Text style={styles.gender}>Gender: {personaje.gender}</Text>
          <Text>Episodes: {personaje.episode.length}</Text>
          <Pressable onPress={() => console.log(`Selected: ${personaje.name}`)}>
            <Text style={{ color: 'blue', marginTop: 5 }}>Select</Text>
          </Pressable>
          <Button styles={styles.button} title="More Info" onPress={() => console.log(`More info about ${personaje.name}`)} />

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
