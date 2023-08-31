import { GlobalStyles } from './Styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './Pages/Movies';
import WatchMovie from './Pages/WatchMovie';
import PageLayout from './components/PageLayout';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import useMovies from './Hooks/useMovies';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');

  const props = useMovies(query);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PageLayout query={query} setQuery={setQuery} />}
          >
            <Route path="/" index element={<Home />} />
            <Route path="/movie" element={<Movies {...props} />} />
            <Route path="/watchedmovie" element={<WatchMovie />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
