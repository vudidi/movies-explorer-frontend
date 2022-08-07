import React from 'react';
import { useLocation } from 'react-router-dom';
import { getTimeFromMins } from '../../utils/getTimeFromMins';
import { saveMoviesId } from '../../utils/getMoviesId';

function MoviesCard(props) {
  const location = useLocation();
  const timeFromMins = getTimeFromMins(props.movie.duration);

  const localSavedMoviesId = localStorage.getItem('savedMovies');
  const localMovies = JSON.parse(localSavedMoviesId);

  const savedMoviesId = saveMoviesId(localMovies);

  const isLiked = savedMoviesId?.includes(props.movie.movieId);

  function handleToggleMovie() {
    props.onToggleMovie(props.movie);
  }

  return (
    <>
      <>
        <li className="movie">
          <div className="movie__container">
            <div className="movie__info">
              <div className="movie__title">{props.movie.nameRU}</div>
              <div className="movie__duration">{timeFromMins}</div>
            </div>

            <button
              className={`movie__icon ${
                location.pathname === '/movies'
                  ? `movie__like ${isLiked && 'movie__like_active'}`
                  : `${isLiked && 'movie__remove'}`
              }`}
              type="button"
              onClick={handleToggleMovie}
            ></button>
          </div>
          <img
            className="movie__image"
            alt={props.movie.name}
            src={props.movie.image}
          ></img>
        </li>
      </>
    </>
  );
}

export default MoviesCard;
