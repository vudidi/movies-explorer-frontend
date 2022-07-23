import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function Movies() {
  return (
    <>
      <div className="section__movies">
        <SearchForm />
        <MoviesCardList />
      </div>
    </>
  );
}

export default Movies;
