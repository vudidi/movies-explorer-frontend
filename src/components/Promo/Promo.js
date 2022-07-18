import React from 'react';
import useWindowWidth from '../../hooks/getWindowWidth.js';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__text">
        {useWindowWidth() >= 540 ? (
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
        ) : (
          <h1 className="promo__title">
            Учебный проект студента&#160;факультета Веб&#8209;разработки.
          </h1>
        )}

        <h2 className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </h2>
      </div>
      <div className="promo__image"></div>
    </section>
  );
}

export default Promo;
