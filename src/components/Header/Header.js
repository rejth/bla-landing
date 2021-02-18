import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = () => {
  const toggleHeaderScroll = target => {
    const targetLink = target.getAttribute('href');
    const scrollTarget = document.querySelector(targetLink);
    const topOffset = document.querySelector('.navbar').offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
  };

  const header = [...document.querySelector('.navbar')];

  header.addEventListener('click', e => {
    if (e.target.matches('.navbar__link')) {
      e.preventDefault();
      toggleHeaderScroll(e.target);
    }
  });

  return (
    <header className="navbar" id="header">
      <div className="container">
        <div className="navbar__wrapper">
          <a href="#" className="navbar__logo logo">
            <img
              className="navbar__logo-image"
              src="img/header/b-logo.png"
              alt="Image of logo"
            />
            <div className="navbar__info">
              <span className="navbar__title">BLA BLA</span>
              <span className="navbar__subtitle">One Page Flat Template</span>
            </div>
          </a>
          <ul className="navbar__list">
            <NavbarLink target={'header'} text={'HOME'} />
            <NavbarLink target={'portfolio'} text={'PORTFOLIO'} />
            <NavbarLink target={'about'} text={'ABOUT'} />
            <NavbarLink target={'contact'} text={'CONTACT'} />
          </ul>
        </div>
      </div>
    </header>
  );
};

const NavbarLink = ({ target, text }) => (
  <li className="navbar__item">
    <a href={`#${target}`} className="navbar__link">
      {text}
    </a>
  </li>
);

NavbarLink.propTypes = {
  target: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
