import React from 'react';
import { Link } from 'react-router-dom';

function AuthForm(props) {
  return (
    <div className="auth">
      <div className="auth__container">
        <Link to="/" className="auth__logo"></Link>
        <h1 className="auth__title">{props.title}</h1>
        <form className="auth__form" name={props.name} id={props.name}>
          {props.children}
        </form>
      </div>
      <div className="auth__button-container">
        <button className="active-element auth__confirm-button">
          {props.buttonTitle}
        </button>
        <div className="auth__link-container">
          <span className="auth__link-span">{props.linkSpan}</span>
          <Link to={props.path} className="active-element auth__form-link">
            {props.linkName}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
