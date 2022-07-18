import React from 'react';

function SearchForm() {
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
          ></input>
          <button className="search__button" type="button"></button>
        </form>

        <div className="search__container-right">
          {' '}
          <label className="switch">
            <input type="checkbox"></input>
            <span className="slider"></span>
          </label>
          <div className="search__shortfilm-text">Короткометражки</div>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
