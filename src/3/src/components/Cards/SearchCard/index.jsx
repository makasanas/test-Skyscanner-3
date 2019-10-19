import React from 'react';
import PropTypes from 'prop-types';
import * as images from './../../../../../assets/images';

// style
import './search-card.scss';

const SearchCard = ({ item }) => (
  <div className="search-card-wrapper">
    <div className="search-card-container">
      <div className="list-view-card">
        <div className="list-view-image-container">
          <img src={images[item.photo]} alt="location" />
        </div>
        <div className="list-view-content">
          <div className="list-view-content-title">
            <h4>{item.exoticName}</h4>
          </div>
          <div className="list-view-content-description">
            <div className="description">
              <span>{item.p1Description}</span>
            </div>
          </div>
          <div className="list-view-price-rating">
            <div className="list-view-price-container">
              <span>Price: </span>
              <span>{item.price}</span>
            </div>
            <div className="list-view-rating-container">
              <img src={images.ratingIcon} alt="rating"/>
              <span>{item.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

SearchCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    exoticName: PropTypes.string.isRequired,
    p1Description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchCard;
