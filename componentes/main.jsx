import { useEffect, useState } from 'react';
import { getPersonajes } from '../lib/rickyMorty';
import { CharacterCard } from './CharacterCard';
import { ActivityIndicator, FlatList, ScrollView } from 'react-native-web';

export function Main() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    getPersonajes().then(data => {
      console.log("Personajes:", data);
      setPersonajes(data);
    });
  }, []);

  return (
    <>
    {personajes.length === 0 ? (
        <ActivityIndicator size={"large"}/> // o <div> si estás en React web
    )   :(

        // FlatList es más eficiente para listas largas
        // y maneja el renderizado de elementos de forma más óptima 
         <FlatList
         data={personajes}
         keyExtractor={(item) => item.id.toString()}
         renderItem={({ item, index }) => (
              <CharacterCard 
                 personaje={item}
                 index={index}
              />
            )}>
            
         </FlatList>
        )
    
    }


    </>
  );
}
