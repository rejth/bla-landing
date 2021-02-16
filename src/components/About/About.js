import React from 'react';
import PropTypes from 'prop-types';
import './About.scss';

const About = () => (
  <section className="about">
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
      style={`background-image:url(img/about/${image})`}
      className="card__image"
    ></div>
    <span className="card__user">{name}</span>
    <span className="card__profession">{profession}</span>
    <p className="card__description">{description}</p>
  </div>
);

UserCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default About;
