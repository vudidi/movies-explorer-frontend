function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio-items">
        <li className="portfolio-item">
          <a
            href="https://vudidi.github.io/how-to-learn"
            target="_blank"
            className="active-element portfolio-item__text"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <a
            href="https://vudidi.github.io/how-to-learn"
            target="_blank"
            className="active-element portfolio-item__icon"
            rel="noreferrer"
          >
            <i aria-hidden="true"></i>{' '}
          </a>
        </li>
        <li className="portfolio-item">
          <a
            href="https://vudidi.github.io/russian-travel"
            target="_blank"
            className="active-element portfolio-item__text"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <a
            href="https://vudidi.github.io/russian-travel"
            target="_blank"
            className="active-element portfolio-item__icon"
            rel="noreferrer"
          >
            <i aria-hidden="true"></i>{' '}
          </a>
        </li>
        <li className="portfolio-item">
          <a
            href="https://vudidi-mesto.nomoreparties.sbs"
            target="_blank"
            className="active-element portfolio-item__text"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <a
            href="https://vudidi-mesto.nomoreparties.sbs"
            target="_blank"
            rel="noreferrer"
            className="active-element portfolio-item__icon"
          >
            <i aria-hidden="true"></i>{' '}
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
