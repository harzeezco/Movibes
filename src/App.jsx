import { GlobalStyles } from './Styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './Pages/Movies';
import WatchMovie from './Pages/WatchMovie';
import PageLayout from './components/PageLayout';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import useMovies from './Hooks/useMovies';
import { Suspense, useState } from 'react';
import Loader from './components/Loader';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [query, setQuery] = useState('');
  const [watched, setWatched] = useLocalStorage([]);

  const props = useMovies(query, 's');

  const handleWatchedMovie = (addWatchedMovie) => {
    setWatched((prev) => [...prev, addWatchedMovie]);
  };
 
  const handleDeleteWatched = (id) => {
    setWatched((prev) => prev.filter((nextPrev) => nextPrev.id !== id))
  }

  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PageLayout query={query} setQuery={setQuery} />}
          >
            <Route path="/" index element={<Home />} />
            <Route
              path="movies/*"
              element={
                <Movies
                  onAddWatchedMovie={handleWatchedMovie}
                  props={props}
                  watched={watched}
                />
              }
            />
            <Route
              path="/watchedmovie"
              element={<WatchMovie watched={watched} onDeleteWatchedMovie={handleDeleteWatched} />}
            />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
