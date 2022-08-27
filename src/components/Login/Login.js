import React from 'react';
import { useForm } from 'react-hook-form';
import AuthForm from '../AuthForm/AuthForm.js';
import { regExEmail } from '../../utils/regEx';

function Login(props) {
  const [isDataChanged, setDataChanged] = React.useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
    mode: 'onChange',
  });

  function onLoginSubmit(data) {
    props.handleLogin({
      email: data.email,
      password: data.password,
      name: data.name,
    });

    setDataChanged(true);
  }

  return (
    <AuthForm
      title="Рады видеть!"
      name="login"
      buttonTitle="Войти"
      linkSpan="Ещё не зарегистрированы?"
      linkName="Регистрация"
      path="/signup"
      onHandleSubmit={handleSubmit(onLoginSubmit)}
      isValid={isValid}
      status={props.status}
      isErrorActive={props.isErrorActive}
      isDataChanged={isDataChanged}
      isSubmitting={props.isSubmitting}
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
            {...register('email', {
              required: 'Поле обязательно для заполнения',
              onChange: () => {
                setDataChanged(false);
              },
              pattern: {
                value: regExEmail,
                message: 'Введите корректную почту',
              },
            })}
          />
          {errors.email && (
            <span className="auth__input-error">{errors.email.message}</span>
          )}
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
            {...register('password', {
              required: 'Поле обязательно для заполнения',
              onChange: () => {
                setDataChanged(false);
              },
            })}
          />
          {errors.password && (
            <span className="auth__input-error">{errors.password.message}</span>
          )}
        </label>
      </div>
    </AuthForm>
  );
}

export default Login;
