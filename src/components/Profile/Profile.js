import React from 'react';
import { useForm } from 'react-hook-form';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { regExName, regExEmail } from '../../utils/regEx';
import showErrorText from '../../utils/errorStatusRecipient';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isDataChanged, setDataChanged] = React.useState(true);
  const [isCurrentValue, setCurrentValue] = React.useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  function onUpdateSubmit(data) {
    props.onUpdateUser({
      name: data.name,
      email: data.email,
    });
    setDataChanged(true);
  }

  function onDataChange(e) {
    const newCurrentValue = {
      ...isCurrentValue,
      [e.target.name]: e.target.value,
    };
    setCurrentValue(newCurrentValue);
  }

  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form
          className="profile__form"
          name="profile"
          id="profile"
          onSubmit={handleSubmit(onUpdateSubmit)}
        >
          <div className="profile__field">
            <label htmlFor="profile-name" className="profile__label">
              Имя
            </label>
            <input
              type="text"
              name="name"
              id="profile-name"
              className="input profile__input profile__name"
              {...register('name', {
                onChange: (e) => {
                  onDataChange(e);
                  setDataChanged(false);
                },
                value: currentUser.name,
                required: 'Поле обязательно для заполнения',
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
              <span className="profile__input-error">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="profile__field">
            {' '}
            <label htmlFor="profile-email" className="profile__label">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="profile-email"
              className="input profile__input profile__email"
              {...register('email', {
                onChange: (e) => {
                  onDataChange(e);
                  setDataChanged(false);
                },
                value: currentUser.email,
                required: 'Поле обязательно для заполнения',
                pattern: {
                  value: regExEmail,
                  message: 'Введите корректную почту',
                },
              })}
            />
            {errors.email && (
              <span className="profile__input-error">
                {errors.email.message}
              </span>
            )}
          </div>
          <span
            className={`profile__form-error ${
              props.isErrorActive &&
              isDataChanged &&
              'profile__form-error_active'
            }`}
          >
            {showErrorText(props.status)}
          </span>
          <span
            className={`profile__form-message ${
              props.isUpdated && 'profile__form-message_active'
            }`}
          >
            Изменения сохранены
          </span>
        </form>
        <button
          className="active-element profile__update-button"
          type="submit"
          form="profile"
          disabled={
            (isCurrentValue.name === currentUser.name &&
              isCurrentValue.email === currentUser.email) ||
            !isValid
          }
        >
          Редактировать
        </button>
        <button
          className="active-element profile__logout-button"
          type="button"
          onClick={props.onSignOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
