import React from 'react';
import './destination-cards.scss';
import PropTypes from 'prop-types';
import * as images from './../../../../../assets/images';

const DestinationCard = ({ item, small }) => (
  <div
    id="single-slide"
    className={
    small ? 'small' : ''
  }
  >
    <img src={images[item.photo]} alt={item.photo} />
    <div className="text-content">
      <div className="text">
        <p>{item.exoticName}</p>
        <p>{item.price}</p>
      </div>
    </div>
  </div>
);

DestinationCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    exoticName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
  small: PropTypes.bool,
};

DestinationCard.defaultProps = {
  item: {},
  small: false,
};

export default DestinationCard;
