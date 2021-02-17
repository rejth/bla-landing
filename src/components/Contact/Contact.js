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
          {/* <div id="map"></div> */}
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.7823244714937!2d37.695927716055834!3d55.79701759604827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b535a128b3e401%3A0xbd8e99fb0dffe2fe!2z0JrQvtC70L7QtNC10LfQvdGL0Lkg0L_QtdGALiwgMtCwLCDQnNC-0YHQutCy0LAsIDEwNzA3Ng!5e0!3m2!1sru!2sru!4v1613601840966!5m2!1sru!2sru"
              width="100%"
              height="265"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
