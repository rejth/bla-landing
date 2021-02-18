import React from 'react';
import Shevron from '../Shevron';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__wrapper">
        <div className="footer__info">
          <i className="fa fa-map-marker-alt"></i>© Copyright 2016 Bla Bla
          Studio | One Page Flat Template
        </div>
        <Shevron />
      </div>
    </div>
  </footer>
);

export default Footer;
