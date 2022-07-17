import React from 'react';
import Promo from '../Promo/Promo.js';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';

function Main() {
  return (
    <>
      <div className="section__main section__main_theme_pink">
        <Promo />
        <NavTab />
      </div>
      <div className="section__main section__main_theme_white">
        <AboutProject />
      </div>
      <div className="section__main section__main_theme_grey">
        <Techs />
      </div>
      <div className="section__main section__main_theme_white">
        <AboutMe />
        <Portfolio />
      </div>
    </>
  );
}

export default Main;
