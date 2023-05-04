import axios from 'axios';
const accessToken = "import.meta.env.VITE_ACCESS_TOKEN";

const tmdbApiData = async () => {
    try{
        const data = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=d25b4cc7bc30868e6f81a0c799b915dd&language=en-US&page=1", {
            headers:{
                Authorization: `bearer ${accessToken}`
            }
        })
        const moviesData = data.data;
        //console.log("data =", moviesData);
        return moviesData
    } catch{
        console.error("Error fetching data");
    }

}

export default tmdbApiData;
