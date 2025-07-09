/*
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Home Mundo!</Text>
      
      <Text>Open up App.js to start working on your app!</Text>
      <button onClick={() => alert('Hello, World!')}>
        Click Me
      </button>

      <Button title='Presione' onPress={() => alert('Hola, Mundo!')}/>

      <Pressable onPress={() => alert('oookkk')} style={{ padding: 10, backgroundColor: 'lightblue' }}>
        <Text>Haga clic</Text>
      </Pressable>

      
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
*/


/*
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function FormularioScreen() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');
  const [imagen, setImagen] = useState(null);

  const pedirPermiso = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Necesitamos acceso a tus fotos');
    }
  };

  const seleccionarImagen = async () => {
    await pedirPermiso();

    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagen(resultado.assets[0].uri);
    }
  };

  const enviarFormulario = () => {
    if (!nombre || !email || !edad || !imagen) {
      Alert.alert('Error', 'Completa todos los campos y sube una foto');
      return;
    }

    Alert.alert('Formulario enviado', `Nombre: ${nombre}\nEmail: ${email}\nEdad: ${edad}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Formulario</Text>

      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text>Edad:</Text>
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
      />

      <Button title="Seleccionar foto" onPress={seleccionarImagen} />
      {imagen && <Image source={{ uri: imagen }} style={styles.imagen} />}

      <View style={{ marginTop: 20 }}>
        <Button title="Enviar" onPress={enviarFormulario} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  imagen: {
    width: 200,
    height: 200,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
});
*/


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import EmpleadosScreen from './screens/EmpleadosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Empleados" component={EmpleadosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
