function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="section-title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__text">
          <h3 className="about-me__name">Виктория</h3>
          <h4 className="about-me__program">Фронтенд-разработчик, 31 год</h4>
          <p className="about-me__description">
            Я родилась и живу в Саратове, закончила Лечебный факультет СГМУ.
            Несколько лет назад решила уйти из медицины и развиваться в области
            IT. Последние 1,5 года я работаю тестировщиком программного
            обеспечения. Работая тестировщикам, поняла, что мне интересно
            попробовать себя в разработке, и решила изучить верстку и язык
            программирования JavaScript на курсе.
          </p>
          <ul className="contact-items">
            <li className="active-element">
              <a
                href="https://www.facebook.com/vika.dovgal.5"
                target="_blank"
                className="contact-item"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="active-element">
              <a
                href="https://github.com/vudidi"
                target="_blank"
                className="contact-item"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img
          alt="Фото студента"
          className="about-me__image"
          src="https://images.unsplash.com/photo-1656815995591-afed11a0afc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        ></img>
      </div>
    </div>
  );
}

export default AboutMe;
