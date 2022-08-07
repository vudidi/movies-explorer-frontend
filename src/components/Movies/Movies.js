import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function Movies(props) {
  function getMovies(e) {
    e.preventDefault();
    props.onGetMovies();
  }

  return (
    <>
      <div className="section__movies">
        <SearchForm
          submitHandler={getMovies}
          inputChangeHandler={props.inputChangeHandler}
          isPreloaderActive={props.isPreloaderActive}
          shortFilmFilter={props.isShortFilmFilter}
          toggleCheckbox={props.toggleCheckbox}
          SearchText={props.SearchText}
          isErrorActive={props.isErrorActive}
          isRequestError={props.isRequestError}
          isNoResult={props.isNoResult}
          isNoSearchText={props.isNoSearchText}
        />
        <MoviesCardList
          movies={props.movies}
          moviesLength={props.moviesLength}
          handleLoadButton={props.handleLoadButton}
          isPreloaderActive={props.isPreloaderActive}
          isHidden={props.isHidden}
          isLiked={props.isLiked}
          handleToggleMovie={props.handleToggleMovie}
        />
      </div>
    </>
  );
}

export default Movies;
