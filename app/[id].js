import { use } from "react";


export default function EpisodePage(){
    const { id } = useParams();
    const [episode, setEpisode] = useState(null);   
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEpisode() {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
                const data = await response.json();
                setEpisode(data);
            } catch (error) {
                console.error("Error fetching episode:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchEpisode();
    }, [id]);

}