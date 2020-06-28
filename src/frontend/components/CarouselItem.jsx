/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addFavorite, deleteFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.addFavorite(props);
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='container-item'>
      <img src={cover} alt={title} className='container-item__img' />
      <div className='container-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <FontAwesomeIcon icon='play-circle' className='play' />
          </Link>
          {isList ?
            <FontAwesomeIcon icon='trash' className='delete' onClick={() => handleDeleteFavorite(id)} /> :
            <FontAwesomeIcon icon='plus-circle' className='plus' onClick={handleSetFavorite} />}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='container-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  addFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

