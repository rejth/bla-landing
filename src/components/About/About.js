import React, { Component } from 'react';
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

class UserCard extends Component {
  state = {
    mouseOver: false,
  };

  mouseEnter = e => {
    e.preventDefault();
    if (!this.state.display) {
      this.setState({
        mouseOver: true,
      });
    }
  };

  mouseLeave = e => {
    e.preventDefault();
    if (this.state.display) {
      this.setState({
        mouseOver: false,
      });
    }
  };

  render() {
    const { image, name, profession, description } = this.props;
    return (
      <div className="about__card card">
        <div
          className="about__image"
          style={{ backgroundImage: `url(img/about/${image})` }}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        >
          <div
            className="about__social-links social-links"
            style={{ display: this.state.mouseOver ? 'flex' : 'none' }}
          >
            <a
              href="https://www.facebook.com/"
              className="social-links__item fb"
            >
              <i className="fa fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/"
              className="social-links__item twitter"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.google.ru/"
              className="social-links__item google"
            >
              <i className="fa fa-google"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="social-links__item globus"
            >
              <i className="fa fa-globe"></i>
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
  }
}

UserCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default About;
