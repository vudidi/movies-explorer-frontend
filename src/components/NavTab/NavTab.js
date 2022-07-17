import React from 'react';
import { Link } from 'react-scroll';

function NavTab() {
  return (
    <div className="project-nav">
      <Link
        className="active-element project-nav__link"
        to="project-about"
        smooth={true}
        duration={1000}
      >
        <p className="project-nav__text">Узнать больше</p>
      </Link>
    </div>
  );
}

export default NavTab;
