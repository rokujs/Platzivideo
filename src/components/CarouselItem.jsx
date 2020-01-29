import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='container-item'>
    <img tabIndex='0' src={cover} alt={title} className='container-item__img' />
    <div className='container-item__details'>
      <div>
        <i className='fas fa-play-circle'> </i>
        <i className='fas fa-plus-circle'> </i>
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='container-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
