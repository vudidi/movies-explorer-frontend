import React from 'react';
import { useForm } from 'react-hook-form';
import AuthForm from '../AuthForm/AuthForm.js';
import { regExName, regExEmail } from '../../utils/regEx';

function Register(props) {
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

  function onRegisterSubmit(data) {
    props.handleRegister({
      email: data.email,
      password: data.password,
      name: data.name,
    });

    setDataChanged(true);
  }

  return (
    <AuthForm
      title="Добро пожаловать!"
      name="register"
      buttonTitle="Зарегистрироваться"
      linkSpan="Уже зарегистрированы?"
      linkName="Войти"
      path="/signin"
      onHandleSubmit={handleSubmit(onRegisterSubmit)}
      isValid={isValid}
      status={props.status}
      isErrorActive={props.isErrorActive}
      isDataChanged={isDataChanged}
      isSubmitting={props.isSubmitting}
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
            {...register('name', {
              required: 'Поле обязательно для заполнения',
              onChange: () => {
                setDataChanged(false);
              },
              minLength: {
                value: 2,
                message: 'Минимальное количество символов: 2',
              },
              maxLength: {
                value: 30,
                message: 'Максимальное количество символов: 30',
              },
              pattern: {
                value: regExName,
                message:
                  'Имя должно содержать только латиницу, кириллицу, пробел или дефис',
              },
            })}
          />
          {errors.name && (
            <span className="auth__input-error">{errors.name.message}</span>
          )}
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
            autoComplete="new-password"
            className="input auth__input register__password"
            {...register('password', {
              required: 'Поле обязательно для заполнения',
              onChange: () => {
                setDataChanged(false);
              },
              minLength: {
                value: 6,
                message: 'Минимальное количество символов: 6',
              },
              maxLength: {
                value: 30,
                message: 'Максимальное количество символов: 30',
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

export default Register;
