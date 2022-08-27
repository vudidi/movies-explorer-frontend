import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation(props) {
  function toggleBurgerMenu() {
    props.onOpenMenu();
  }

  return (
    <>
      {/* Навигация по фильмам авторизованного пользователя */}
      <div
        className={`header__movies-nav ${
          props.loggedIn && 'header__movies-nav_active'
        } `}
      >
        <NavLink to="/movies" className="active-element header__link-movies">
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="active-element header__link-favourites"
        >
          Сохраненные&#160;фильмы
        </NavLink>
      </div>

      {/* Навигация по профилю авторизованного пользователя */}
      <div
        className={`header__account-nav ${
          props.loggedIn && 'header__account-nav_active'
        } `}
      >
        <Link to="/profile" className="active-element header__account-text">
          Аккаунт
        </Link>
        <Link to="/profile" className="header__account-button">
          <div className="header__account-icon"></div>
        </Link>
      </div>

      {/* Бургерное меню */}
      <div
        className={`header__menu-icon ${
          props.isMenuOpen
            ? 'header__menu-icon_active header__menu-icon_fixed'
            : !props.loggedIn && 'header__menu-icon_unactive'
        }`}
        onClick={toggleBurgerMenu}
      >
        {' '}
        <span></span>
      </div>

      <div
        onClick={toggleBurgerMenu}
        className={`header__menu ${props.isMenuOpen && 'header__menu_opened'}`}
      >
        <div
          className={`header__menu-container ${
            props.isMenuOpen && 'header__menu-container_opened'
          }`}
        >
          <ul className="menu-items">
            <li className="menu-item">
              {' '}
              <NavLink
                to="/"
                exact="true"
                className="active-element menu-item-link"
              >
                Главная
              </NavLink>
            </li>
            <li className="menu-item">
              {' '}
              <NavLink to="/movies" className="active-element menu-item-link">
                Фильмы
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/saved-movies"
                className="active-element menu-item-link"
              >
                Сохраненные&#160;фильмы
              </NavLink>
            </li>
          </ul>

          <div className="menu__account-nav">
            <Link to="/profile" className="active-element menu__account-text">
              Аккаунт
            </Link>
            <Link to="/profile" className="menu__account-button">
              <div className="menu__account-icon"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
