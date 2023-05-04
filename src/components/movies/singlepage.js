import './singlepage.css'
import { useParams } from 'react-router-dom';
import tmdbApiData from '../../utlis/api'
import { useEffect, useState } from 'react';

const Singlepage = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await tmdbApiData("");
            const movie = data.results.find((item) => item.id === parseInt(id));
            if (movie) {
                setMovieData(movie);
            }
            console.log(movie.poster_path);
        };
        fetchData();
    }, [id]);

    return (
        <div className="singlepage">
            <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="Movie Poster" />
            <h1>{movieData.original_title}</h1>
            <p>{movieData.overview}</p>
            <h2>Rating: {movieData.vote_average}</h2>
        </div>
    );
};

export default Singlepage;
