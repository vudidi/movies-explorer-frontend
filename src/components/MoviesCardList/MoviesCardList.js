import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader.js';
import useWindowWidth from '../../hooks/getWindowWidth.js';

function MoviesCardList() {
  const [isPreloaderActive, setPreloaderActive] = React.useState(false);

  function handleLoadButton() {
    setPreloaderActive(true);
  }

  return (
    <section className="movies__container">
      {useWindowWidth() >= 700 ? (
        <ul className="movies">
          <MoviesCard
            title="33 слова о дизайне"
            duration="1ч 42м"
            link={require('../../styles/images/cards/pic__COLOR_pic.png')}
          />
          <MoviesCard
            title="Киноальманах «100 лет дизайна»"
            duration="1ч 42м"
            link={require('../../styles/images/cards/pic__COLOR_pic (1).png')}
          />
          <MoviesCard
            title="В погоне за Бенкси"
            duration="1ч 42м"
            link={require('../../styles/images/cards/pic__COLOR_pic (2).png')}
          />
          <MoviesCard
            title="Баския: Взрыв реальности"
            duration="1ч 42м"
            link={require('../../styles/images/cards/pic__COLOR_pic (3).png')}
          />
          <MoviesCard
            title="Бег это свобода"
            duration="1ч 42м"
            link={require('../../styles/images/cards/pic__COLOR_pic (4).png')}
          />
          <MoviesCard
            title="Бег это свобода"
            duration="1ч 42м"
            link={require('../../styles/images/cards/pic__COLOR_pic (5).png')}
          />
          <MoviesCard
            title="Когда я думаю о Германии ночью"
            duration="1ч 42м"
            link={require('../../styles/images/cards/pic__COLOR_pic (6).png')}
          />
        </ul>
      ) : (
        <ul className="movies">
          <MoviesCard
            title="33 слова о дизайне"
            duration="1ч 42м"
            link={require('../../styles/images/cards/pic__COLOR_pic.png')}
          />
          <MoviesCard
            title="Киноальманах «100 лет дизайна»"
            duration="1ч 42м"
            link={require('../../styles/images/cards/pic__COLOR_pic (1).png')}
          />
          <MoviesCard
            title="В погоне за Бенкси"
            duration="1ч 42м"
            link={require('../../styles/images/cards/pic__COLOR_pic (2).png')}
          />
          <MoviesCard
            title="Баския: Взрыв реальности"
            duration="1ч 42м"
            link={require('../../styles/images/cards/pic__COLOR_pic (3).png')}
          />
          <MoviesCard
            title="Бег это свобода"
            duration="1ч 42м"
            link={require('../../styles/images/cards/pic__COLOR_pic (4).png')}
          />
        </ul>
      )}

      {isPreloaderActive && <Preloader />}
      <button
        className="movies__load-button"
        type="button"
        onClick={handleLoadButton}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
