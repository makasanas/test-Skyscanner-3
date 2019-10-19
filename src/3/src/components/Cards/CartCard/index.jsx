import React from 'react';
import PropTypes from 'prop-types';
import { MdClear } from 'react-icons/md';
import './cart-card.scss';
import * as images from './../../../../../assets/images';

const CartCard = ({ item, onClick }) => (
  <li className="cart-item">
    <button
      type="button"
      className="delete-item"
      title="delete item"
      onClick={onClick}
    >
      <MdClear />
    </button>
    <div className="cart-item-container">
      <div className="thumbnail-container">
        <img src={images[item.photo]} alt="thumbnail" />
      </div>
      <div className="content-title">
        <h4>{item.title}</h4>
      </div>
      <div className="item-price">
        <span>{item.price}</span>
      </div>
    </div>
  </li>
);

CartCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

CartCard.defaultProps = {
  item: {},
};


export default CartCard;
