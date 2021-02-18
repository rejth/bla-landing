import React from 'react';
import PropTypes from 'prop-types';
import './About.scss';

const About = () => (
  <section className="about" id="about">
    <div className="about__wrapper">
      <h2 className="about__title">About Us</h2>
      <p className="about__subtitle">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </p>
      <div className="about__cards-wrapper">
        <UserCard
          image={'ava-1.png'}
          name={'Melannie Doe'}
          profession={'Project Manager'}
          description={
            'Ut wisi enim ad minim veniam, quis nostrud exerci tation'
          }
        />
        <UserCard
          image={'ava-2.png'}
          name={'Jhonnie Doe'}
          profession={'Graphic Designer'}
          description={
            'Ut wisi enim ad minim veniam, quis nostrud exerci tation ' +
            'ullamcorper suscipit lobortis nislut aliquip ex ea commodo consequat.'
          }
        />
        <UserCard
          image={'ava-3.png'}
          name={'Daniel Doe'}
          profession={'Web Designer'}
          description={
            'Ut wisi enim ad minim veniam, quis nostrud exerci tation ' +
            'ullamcorper suscipit lobortis nisl ' +
            'ut aliquip ex ea commodo'
          }
        />
      </div>
    </div>
  </section>
);

const UserCard = ({ image, name, profession, description }) => (
  <div className="about__card card">
    <div
      style={{ backgroundImage: `url(img/about/${image})` }}
      className="about__image"
    >
      <div className="about__social-links social-links">
        <a href="https://www.facebook.com/" className="social-links__item">
          <img
            className="social-links__image"
            src="img/about/facebook.png"
          ></img>
        </a>
        <a href="https://twitter.com/" className="social-links__item">
          <img
            className="social-links__image"
            src="img/about/twitter.png"
          ></img>
        </a>
        <a href="https://www.google.ru/" className="social-links__item">
          <img className="social-links__image" src="img/about/google.png"></img>
        </a>
        <a href="https://www.instagram.com/" className="social-links__item">
          <img className="social-links__image" src="img/about/globus.png"></img>
        </a>
      </div>
    </div>
    <div className="about__info">
      <span className="about__user">{name}</span>
      <span className="about__profession">{profession}</span>
      <p className="about__description">{description}</p>
    </div>
  </div>
);

UserCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default About;
