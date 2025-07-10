export async function getPersonajes() {
    const CHARACTERES = 'https://rickandmortyapi.com/api/character';

    
    const rawData = await fetch(`${CHARACTERES}`);
    const json = await rawData.json();  
    console.log("rawData", rawData);
    console.log("json", json);

    const {results} = json;
    console.log("results", results);

    return results.map((item) => {
        const {id, name, status, species, gender, episode, image} = item;
        return {
            id,
            name,
            status,
            species,
            gender,
            episode,
            image
        };
    });     
   
}
