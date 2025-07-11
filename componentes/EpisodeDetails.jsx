import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';


export function EpisodeDetails({ episodeId }) {
    const [episodeDetails, setEpisodeDetails] = useState(null);
    
    useEffect(() => {
        getEpisodeDetails(episodeId).then(data => {
        console.log("Episode Details:", data);
        setEpisodeDetails(data);
        });
    }, [episodeId]);
    
    if (!episodeDetails) {
        return <ActivityIndicator size="large" />;
    }
    
    return (
        <View>
        <Text style={styles.title}>{episodeDetails.name}</Text>
        <Text style={styles.text}>Fecha de  emision: {episodeDetails.air_date}</Text>
        <Text style={styles.text}>Episode: {episodeDetails.episode}</Text>
        </View>
    );


}