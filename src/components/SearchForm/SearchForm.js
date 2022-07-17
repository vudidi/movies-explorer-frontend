import React from 'react';

function SearchForm() {
  return (
    <div className="search">
      {' '}
      <div className="search__panel">
        <div className="search__container-left">
          {' '}
          <div className="search__loupe"></div>
          <input
            type="search"
            placeholder="Фильм"
            className="input search__input"
          ></input>
          <button className="search__button"></button>
        </div>

        <div className="search__container-right">
          {' '}
          <label className="switch">
            <input type="checkbox"></input>
            <span className="slider"></span>
          </label>
          <div className="search__shortfilm-text">Короткометражки</div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
