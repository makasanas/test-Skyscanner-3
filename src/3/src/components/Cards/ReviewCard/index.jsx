import React from 'react';
import PropTypes from 'prop-types';
import './review-card.scss';
import * as images from './../../../../../assets/images';

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-card-content">
        <img src={images[review.photo]} alt={review.photo} />
        <span>{review.name}</span>
      </div>
      <div className="review-card-description">
        <p>{review.description}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string,
    photo: PropTypes.string,
    description: PropTypes.string,
  }),
};

ReviewCard.defaultProps = {
  review: {
    name: '',
    photo: '',
    description: '',
  },
};

export default ReviewCard;
