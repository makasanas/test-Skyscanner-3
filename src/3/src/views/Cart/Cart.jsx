import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get, filter } from 'lodash';
import { Link } from "react-router-dom";

import CartCard from '../../components/Cards/CartCard';
import Input from '../../components/Input';
// state
import { getData } from '../../redux/actions/index';
// style
import './cart.scss';


class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    await this.props.getData();
    const products = get(this.props.data, 'cart.products', []);
    this.setState({ products });
  }

  handlePromoCodeChange(e) {
    console.log(e.target.value);
  }

  handleDeleteItem(context, id) {
    return function () {
      const newProducts = filter(context.state.products, (item) => item.id !== id);
      if(newProducts.length === 0){
        context.props.history.push('/courses')
      }
      
      context.setState({
        products: newProducts
      })

    };
  }

  render() {
    const cart = get(this.props.data, 'cart', {});
    const { products } = this.state;
    return (
      <div className="wrapper">
        <div className="container cart-container">
          <ul className="items-container">
            {
              products.length > 0 && products.map((item, i) => (
                <CartCard item={item} key={item.id} onClick={this.handleDeleteItem(this, item.id)} />
              ))
            }
          </ul>
          <div className="total-container">
            <div className="total-title">
              <span>Total</span>
            </div>
            <div className="total-price">
              <span>{cart.total}</span>
            </div>
          </div>
          <div className="promo-container">
            <div className="promo-title">
              <span>Promo Code? </span>
            </div>
            <div className="promo-input">
              <Input
                onChange={this.handlePromoCodeChange}
              />
            </div>
          </div>
          <div className="purchase-container">
            <div className="buttons-container">
              <div className="cancel-button">
                <Link to="/courses">
                  <button className="cart-button" type="button">
                    <span>Cancel</span>
                  </button>
                </Link>
              </div>
              <div className="purchase-button">
                <button className="cart-button" type="submit">
                  {/* Redirect to Login if not loggedin or to payment */}
                  <span>Purchase</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Cart.propType = {
  getData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.reducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
