import './movies.css';
import tmdbApiData from '../../utlis/api';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUrlApi } from '../../store/homeslice';
import { Link } from 'react-router-dom';

const MOVIES_PER_PAGE = 12;

const Movies = ({ searchedMovie }) => {
  const [movieData, setMovieData] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const query = searchedMovie ? `&query=${searchedMovie}` : '';
      const data = await tmdbApiData(query);
      setMovieData(data.results);
      dispatch(getUrlApi(data));
      setSearchedValue(searchedMovie); // set the searched value
    };

    fetchMovies();
  }, [dispatch, searchedMovie]);

  const cleanString = (str) => {
    return str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  };

  const getFilteredMovies = (movies, searchedValue) => {
    if (!searchedValue) {
      return movies;
    }
    const cleanedSearchValue = cleanString(searchedValue);
    return movies.filter((item) => cleanString(item.original_title).includes(cleanedSearchValue));
  };

  const getPageMovies = (movies, currentPage, moviesPerPage) => {
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    return movies.slice(indexOfFirstMovie, indexOfLastMovie);
  };

  const getTotalPages = (movies, moviesPerPage) => {
    return Math.ceil(movies.length / moviesPerPage);
  };

  const filteredMovies = getFilteredMovies(movieData, searchedValue);
  const currentMovies = getPageMovies(filteredMovies, currentPage, MOVIES_PER_PAGE);
  const totalPages = getTotalPages(filteredMovies, MOVIES_PER_PAGE);

  return (
    <>
      <div className='movie-grid'>
        {currentMovies.map((item) => {
          return (
            <Link to={`/single/${item.id}`} key={item.id}>
              <div className='movie-card'>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt='Movie Poster' />
                <h2>{item.original_title}</h2>
                <p>Rating: {item.vote_average}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className='pagination-container'>
        <div className='pagination'>
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
          {[...Array(totalPages)].map((_, index) => (
            <button key={index} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Movies;
