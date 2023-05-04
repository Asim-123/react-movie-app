import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Header from './components/header/header'
import Singlepage from './pages/singlepage';
import Footer from './components/footer/footer';



function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/movie" exact element={<Movie />} />
        <Route path="/single/:id" exact element={<Singlepage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
