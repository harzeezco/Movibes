import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import Trailer from '../assets/images/Trailer.png';
import Row from '../UI-Logic/Row';
import BtnStyles from '../UI-Logic/BtnStyles';
import RatingBox from './RatingBox';
import UserRating from './UserRating';

const MovieDetailsBoxStyles = styled.div`
  padding: 2rem;
`;

const MovieDetailsTextWrapperStyles = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 25rem;

  .heading {
    word-spacing: 3px;
  }

  .plot {
    border-bottom: 1px solid var(--color-dark-tertiary);
    padding-bottom: 1.5rem;
    max-width: 90%;
  }

  .btn-box {
    padding: 0 1rem;
  }
`;

const MovieDetailsInfoStyles = styled.ul`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  max-width: 90%;

  li {
    border-bottom: 1px solid var(--color-dark-tertiary);
    padding: 0 0 1.5rem;
  }

  li p span {
    color: var(--color-primary);
    padding-left: 4px;
  }
`;

const MovieDetailsBox = ({ items, onAddWatchedMovie, watched }) => {
  const {
    Year: year,
    Poster: poster,
    Actors: actors,
    Awards: awards,
    Director: director,
    Type: type,
    Plot: plot,
    Released: released,
    Title: title,
    Writer: writer,
    Metascore: metascore,
    Runtime: runtime,
    Language: language,
    imdbVotes,
    imdbID,
  } = items;
  const navigate = useNavigate();
  const { id } = useParams();

  const [userRating, setUserRating] = useState('');
  const [isLike, setIsLike] = useState(false);

  const isWatched = watched.map((movie) => movie.id).includes(id);

  const handleAddToWatchedList = () => {
    const newWatchedMovie = {
      year,
      title,
      poster,
      actors,
      awards,
      director,
      plot,
      writer,
      runtime,
      userRating,
      imdbVotes,
      isLike,
      id: imdbID,
    };

    onAddWatchedMovie(newWatchedMovie);
    navigate('/watchedmovie');
  };

  return (
    <MovieDetailsBoxStyles>
      <img src={Trailer} alt="A video that shows the movie trailer" />
      <MovieDetailsTextWrapperStyles>
        <Row big_gap={'true'}>
          <Row direction="horizon">
            <p className="heading">
              {title} <b>&middot;</b> {year} <b>&middot;</b> PG-13{' '}
              <b>&middot;</b> {runtime}
            </p>

            <Row direction="default" className="btn-box">
              <BtnStyles size="small" hover_none={'true'}>
                {type}
              </BtnStyles>
              <BtnStyles size="small" hover_none={'true'}>
                {language}
              </BtnStyles>
            </Row>
          </Row>
          <p className="plot">{plot}</p>

          <MovieDetailsInfoStyles>
            <li>
              <p>
                Director : <span>{director}</span>
              </p>
            </li>

            <li>
              <p>
                Stars : <span>{actors}</span>
              </p>
            </li>
            <li>
              <p>
                Writers : <span>{writer}</span>
              </p>
            </li>
            <li>
              <p>
                Released : <span>{released}</span>
              </p>
            </li>
          </MovieDetailsInfoStyles>

          <Row direction="horizon">
            <BtnStyles size="meduim_Large">
              Top rated movie #{metascore}
            </BtnStyles>
            <BtnStyles size="meduim_Large">{awards}</BtnStyles>
          </Row>
        </Row>
        <div>
          <UserRating
            userRating={userRating}
            imdbVotes={imdbVotes}
            isLike={isLike}
            isWatched={isWatched}
            setIsLike={setIsLike}
          />
          <RatingBox
            onAddWatchedMovie={handleAddToWatchedList}
            onSetRating={setUserRating}
            userRating={userRating}
            isWatched={isWatched}
          />
          <img src={poster} alt="" />
        </div>
      </MovieDetailsTextWrapperStyles>
    </MovieDetailsBoxStyles>
  );
};

MovieDetailsBox.propTypes = {
  items: PropTypes.object,
  watched: PropTypes.array,
  onAddWatchedMovie: PropTypes.func,
  year: PropTypes.number,
  poster: PropTypes.string,
  actors: PropTypes.string,
  awards: PropTypes.string,
  director: PropTypes.string,
  type: PropTypes.string,
  plot: PropTypes.string,
  released: PropTypes.number,
  title: PropTypes.string,
  writer: PropTypes.string,
  Metmetascore: PropTypes.string,
  Rruntime: PropTypes.string,
  Language: PropTypes.string,
  imdbVotes: PropTypes.string,
};

export default MovieDetailsBox;
