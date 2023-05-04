import { useState } from 'react';
import './hero.css';

const Hero = ({ setSearchedMovie }) => {
  const [search, setSearch] = useState('');

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setSearchedMovie(search);
  };

  return (
    <>
      <div className='hero'>
        <input type='search' name='searchmovies' placeholder='search Movies' onChange={handleInput} />
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
};

export default Hero;
