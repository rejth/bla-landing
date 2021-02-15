import React from 'react';
import './Brand.scss';

const Brand = () => (
  <section className="brand">
    <h1 className="brand__title">We Build Brand</h1>
    <h3 className="brand__subtitle">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </h3>
    <button className="brand__button">Learn more</button>
    <a href="#portfolio" className="brand__link">
      <img
        className="brand__arrow"
        src="img/brand/arrow-down.png"
        alt="Image of arrow"
      ></img>
    </a>
  </section>
);

export default Brand;
