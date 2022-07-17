import React from 'react';
import AuthForm from '../AuthForm/AuthForm.js';

function Register() {
  return (
    <AuthForm
      title="Добро пожаловать!"
      name="register"
      buttonTitle="Зарегистрироваться"
      linkSpan="Уже зарегистрированы?"
      linkName="Войти"
      path="/signin"
    >
      <div className="auth__input-container">
        {' '}
        <label htmlFor="register-name" className="auth__label">
          Имя{' '}
          <input
            type="text"
            name="name"
            id="register-name"
            className="input auth__input register__name"
            defaultValue="Виталий"
            minLength="2"
            maxLength="40"
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className="auth__input-container">
        {' '}
        <label htmlFor="register-email" className="auth__label">
          E-mail{' '}
          <input
            type="email"
            name="email"
            id="register-email"
            className="input auth__input register__email"
            defaultValue="pochta@yandex.ru"
            minLength="2"
            maxLength="40"
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className="auth__input-container">
        {' '}
        <label htmlFor="register-password" className="auth__label">
          Пароль{' '}
          <input
            type="password"
            name="password"
            id="register-password"
            className="input auth__input register__password"
            defaultValue="12345"
            minLength="6"
            maxLength="30"
            required
            autoComplete="off"
          />
        </label>
        <span className="form-error">Что-то пошло не так...</span>
      </div>
    </AuthForm>
  );
}

export default Register;
