import Cast from 'pages/Cast';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import Reviews from 'pages/Reviews';
import { NavLink, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <header>
        <NavLink to="/trending/get-trending">Home</NavLink>
        <NavLink to="/search/search-movies">Movies</NavLink>
        <NavLink to="/movies/get-movie-details">MovieDetails</NavLink>
        <NavLink to="/movies/get-movie-credits">Cast</NavLink>
        <NavLink to="/movies/get-movie-reviews">Reviews</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/movies/get-movie-credits" element={<Cast />} />
          <Route path="/trending/get-trending" element={<Home />} />
          <Route path="/search/search-movies" element={<Movies />} />
          <Route path="/movies/get-movie-details" element={<MovieDetails />} />
          <Route path="/movies/get-movie-reviews" element={<Reviews />} />
        </Routes>
      </main>
      React homework template
    </div>
  );
};

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.

//  style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
