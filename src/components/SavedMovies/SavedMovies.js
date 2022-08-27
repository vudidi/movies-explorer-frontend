import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies(props) {
  function filterMovies(e) {
    e.preventDefault();
    props.onFilterMovies();
  }
  return (
    <>
      <div className="section__movies">
        <SearchForm
          submitHandler={filterMovies}
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
          handleToggleMovie={props.handleToggleMovie}
          isLiked={props.isLiked}
          moviesLength={props.moviesLength}
          handleLoadButton={props.handleLoadButton}
          isPreloaderActive={props.isPreloaderActive}
          isHidden={props.isHidden}
        />
      </div>
    </>
  );
}

export default SavedMovies;
