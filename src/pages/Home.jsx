import { useState } from 'react';
import Hero from '../components/hero/hero';
import Movies from '../components/movies/movies';
import './home.css'

const Home = () => {
  const [searchedMovie, setSearchedMovie] = useState('');

  return (
    <>
      <Hero setSearchedMovie={setSearchedMovie} />
      <div class="movies">
      <Movies searchedMovie={searchedMovie} />
      </div>
    </>
  );
};

export default Home;
