import React from 'react';
import Preloader from '../Preloader/Preloader.js';
import * as constants from '../../utils/constants';

function SearchForm(props) {
  return (
    <section className="search">
      {' '}
      <div className="search__panel">
        <form className="search__container-left">
          {' '}
          <div className="search__loupe"></div>
          <input
            type="search"
            placeholder="Фильм"
            className="input search__input"
            onChange={props.inputChangeHandler}
            value={props.SearchText || ''}
          ></input>
          <button
            className="search__button"
            type="submit"
            onClick={props.submitHandler}
          ></button>
        </form>

        <div className="search__container-right">
          {' '}
          <label className="switch">
            <input
              type="checkbox"
              checked={props.shortFilmFilter}
              onChange={props.toggleCheckbox}
            ></input>
            <span className="slider"></span>
          </label>
          <div className="search__shortfilm-text">Короткометражки</div>
        </div>
      </div>
      {props.isErrorActive && (
        <p
          className={`search__results-error ${
            !props.isRequestError && 'search__results-error_invisible'
          }`}
        >
          {constants.searchErrorMessage}
        </p>
      )}
      {props.isErrorActive && (
        <p
          className={`search__results-error ${
            !props.isNoResult && 'search__results-error_invisible'
          }`}
        >
          {constants.noResultsMessage}
        </p>
      )}
      {props.isErrorActive && (
        <p
          className={`search__results-error ${
            !props.isNoSearchText && 'search__results-error_invisible'
          }`}
        >
          {constants.noSearchMessage}
        </p>
      )}
      {props.isPreloaderActive && <Preloader />}
    </section>
  );
}

export default SearchForm;
