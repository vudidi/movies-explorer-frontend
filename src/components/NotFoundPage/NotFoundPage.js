import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  function handleGoBackLink() {
    navigate(-1);
  }

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>

        <button
          className="active-element not-found__button"
          onClick={handleGoBackLink}
        >
          Назад
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
