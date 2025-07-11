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

export async function getEpisodeDetails(episodeId) {
    const episodeUrl = `https://rickandmortyapi.com/api/episode/${episodeId}`;
    console.log("episodeUrl", episodeUrl);

    try {
        const rawData = await fetch(episodeUrl);
        const json = await rawData.json();

        const { id, name, air_date, episode } = json;
        
        return {
            id, name, air_date, episode
        }; 
        
    } catch (error) {
        console.error("Error fetching episode details:", error);
        throw error;
    }

    
}