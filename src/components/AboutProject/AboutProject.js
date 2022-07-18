import React from 'react';

function AboutProject() {
  return (
    <section className="project" id="project-about">
      <h2 className="section-title">О проекте</h2>
      <div className="section-line"></div>
      <ul className="project-items">
        <li className="project-item">
          <h3 className="project-item__title">
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="project-item__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="project-item">
          <h3 className="project-item__title">
            На выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="project-item__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="tracker-items">
        <li className="tracker-item">
          <div className="tracker-item__duration tracker-item__duration_theme_dark">
            1 неделя
          </div>
          <p className="tracker-item__title">Back-end</p>
        </li>
        <li className="tracker-item">
          <div className="tracker-item__duration">4 недели</div>
          <p className="tracker-item__title">Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
