import React from 'react';
import './Portfolio.scss';

const Portfolio = () => {
  const renderItems = count => {
    const items = [];
    for (let i = 1; i < count + 1; i++) {
      items.push(
        <div className="portfolio__item">
          <img
            className="portfolio__image"
            src={`img/portfolio/img-${i}.png`}
            alt="Image of item"
          />
        </div>
      );
    }
    return items;
  };

  const portfolioItems = renderItems(8);

  return (
    <section className="portfolio">
      <div className="portfolio__wrapper">
        <h2 className="portfolio__title">Portfolio</h2>
        <p className="portfolio__subtitle">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
        <div className="portfolio__btn-wrapper">
          <button className="portfolio__button btn-1">All</button>
          <button className="portfolio__button btn-2">WEB DESIGN</button>
          <button className="portfolio__button btn-3">GRAPHIC DESIGN</button>
          <button className="portfolio__button btn-4">FLAT DESIGN</button>
        </div>
        <div className="portfolio__items-wrapper">{portfolioItems}</div>
      </div>
    </section>
  );
};

export default Portfolio;
