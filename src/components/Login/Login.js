import React from 'react';
import AuthForm from '../AuthForm/AuthForm.js';

function Login() {
  return (
    <AuthForm
      title="Рады видеть!"
      name="login"
      buttonTitle="Войти"
      linkSpan="Ещё не зарегистрированы?"
      linkName="Регистрация"
      path="/signup"
    >
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
        <span className="form-error"></span>
      </div>
    </AuthForm>
  );
}

export default Login;
