import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className="footer__container">
        <div className="footer__copyright">&#169; 2020</div>
        <ul className="footer__socials">
          <li className="active-element footer__social-li">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              className="footer__social"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="active-element footer__social-li">
            <a
              href="https://github.com/"
              target="_blank"
              className="footer__social"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="active-element footer__social-li">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer__social"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
