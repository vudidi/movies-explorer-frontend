import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
  return (
    <section
      className={`movies__container ${
        props.moviesLength === 0 && 'movies__container_empty'
      } `}
    >
      {
        <ul className="movies">
          {props.movies?.map((item) => {
            return (
              <MoviesCard
                movie={item}
                key={item.movieId}
                onToggleMovie={props.handleToggleMovie}
                isLiked={props.isLiked}
              />
            );
          })}
        </ul>
      }
      <button
        className={`movies__load-button ${
          props.isHidden && 'movies__load-button_hidden'
        }`}
        type="button"
        onClick={props.handleLoadButton}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
