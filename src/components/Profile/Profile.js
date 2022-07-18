import React from 'react';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" name="profile" id="profile">
          <div className="profile__field">
            <label htmlFor="profile-name" className="profile__label">
              Имя
            </label>
            <input
              type="text"
              name="name"
              id="profile-name"
              className="input profile__input profile__name"
              defaultValue="Виталий"
              minLength="2"
              maxLength="40"
              required
              autoComplete="off"
            />
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
              defaultValue="pochta@yandex.ru"
              minLength="2"
              maxLength="40"
              required
              autoComplete="off"
            />
          </div>
        </form>
        <button className="active-element profile__update-button" type="button">
          Редактировать
        </button>
        <button className="active-element profile__logout-button" type="button">
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
