import React from 'react';
import './Shevron.scss';

const Shevron = () => {
  const toggleUpScroll = () => {
    const scrollTarget = document.querySelector('.navbar');
    scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  document.addEventListener('click', e => {
    if (e.target.matches('.up')) {
      toggleUpScroll();
    }
  });

  return (
    <a href="#header" className="up">
      <img
        className="up__arrow"
        alt="Image of up-button"
        src="img/shevron/shevron.png"
      ></img>
    </a>
  );
};

export default Shevron;
