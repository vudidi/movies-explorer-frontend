import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const location = useLocation();

  return (
    <header
      className={`header ${
        location.pathname === '/' ? 'header_theme_main' : 'header_theme_general'
      }`}
    >
      <div className="header__container">
        <Link to="/" className="header__logo"></Link>

        <Navigation
          onOpenMenu={props.onOpenMenu}
          isMenuOpen={props.isMenuOpen}
        />

        {/* Хедер НЕавторизованного пользователя */}
        <div className="header__unauth-nav">
          <Link to="/signup" className="active-element header__link-signup">
            Регистрация
          </Link>
          <Link to="/signin" className="active-element header__link-signin">
            <p className="header__link-signin__text">Войти</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
