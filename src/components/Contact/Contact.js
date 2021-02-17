import React from 'react';
import './Contact.scss';

const Contact = () => (
  <section className="contact" id="contact">
    <div className="contact__wrapper">
      <h2 className="contact__title">Contact Us</h2>
      <p className="contact__subtitle">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </p>
      <div className="contact__content">
        <form className="contact__form" action="send.php" method="POST">
          <div className="contact__input-wrapper">
            <div className="contact__input-group">
              <input
                type="text"
                className="contact__input"
                placeholder="Your name"
                name="name"
                required
              />
            </div>
            <div className="contact__input-group">
              <input
                type="email"
                className="contact__input"
                placeholder="Your email"
                name="email"
                required
              />
            </div>
          </div>
          <textarea
            className="contact__message"
            placeholder="Your message"
            name="message"
          ></textarea>
          <button className="contact__button">SUBMIT</button>
        </form>
        <div className="contact__map">
          <span className="contact__location">
            Bla Bla Company 125009 Moscow, Red Square 1
          </span>
          <div id="map"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
