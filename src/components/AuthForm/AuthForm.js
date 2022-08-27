import React from 'react';
import { Link } from 'react-router-dom';
import showErrorText from '../../utils/errorStatusRecipient';

function AuthForm(props) {
  return (
    <div className="auth">
      <div className="auth__container">
        <Link to="/" className="auth__logo"></Link>
        <h1 className="auth__title">{props.title}</h1>
        <form
          className="auth__form"
          name={props.name}
          id={props.name}
          onSubmit={props.onHandleSubmit}
          noValidate
        >
          {props.children}
        </form>
      </div>

      <div className="auth__button-container">
        <span
          className={`form-error ${
            props.isErrorActive && props.isDataChanged && 'form-error_active'
          }`}
        >
          {showErrorText(props.status)}
        </span>

        <button
          className="active-element auth__confirm-button"
          type="submit"
          form={props.name}
          disabled={!props.isValid || props.isSubmitting}
        >
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
