import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
  const location = useLocation();

  return (
    <>
      <>
        <li className="movie">
          <div className="movie__container">
            <div className="movie__info">
              <div className="movie__title">{props.title}</div>
              <div className="movie__durarion">{props.duration}</div>
            </div>
            <button
              className={`movie__icon ${
                location.pathname === '/movies'
                  ? 'movie__like movie__like_active'
                  : 'movie__remove'
              }`}
              type="button"
            ></button>
          </div>
          <img
            className="movie__image"
            alt={props.title}
            src={props.link}
          ></img>
        </li>
      </>
    </>
  );
}

export default MoviesCard;
