import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';

// style
import './product-details.scss';

// state
import { getData } from '../../redux/actions/index';
import * as images from './../../../../assets/images';
const homeUrl = process.env.NODE_ENV !== 'development' ? process.env.PUBLIC_URL : '';


class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartHasItems: false,
      isVideoOpen: false,
      shake: false,
      product: {}
    };

    this.scrollToTopRef = React.createRef();

    this.handleClick = this.handleClick.bind(this);
    this.handleVideoModal = this.handleVideoModal.bind(this);
  }

  componentDidMount() {
    this.props.getData().then((res) => {
      console.log(res.value);
      this.setState({
        product: res.value.destination[this.props.match.params.courseId]
      })
    });
    // https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
    // fix with this
    window.scrollTo(0, 0);
  }

  handleClick() {
    const { cartHasItems, shake } = this.state;
    this.setState({
      cartHasItems: !cartHasItems,
      shake: !shake,
    });
  }

  handleVideoModal() {
    this.setState({
      isVideoOpen: true,
    });
  }

  render() {
    console.log(this.props.match.params.courseId);
    let product = get(this.props.data, 'product', {});

    product = { ...product, ...this.state.product }

    const backgroundPath = images[product.image];
    const playButtonPath = images.playicon;
    const { shake, isVideoOpen, cartHasItems } = this.state;
    return (
      <div className="wrapper flex" ref={this.scrollToTopRef}>
        <ModalVideo
          channel={product.videoSoure}
          isOpen={isVideoOpen}
          videoId={product.videoId}
          onClose={() => this.setState({ isVideoOpen: false })}
        />
        <div className="video-component-container">
          <StyledContainer image={backgroundPath}>
            <div className="play-content">
              <div className="title-content">
                <p>Travel to India</p>
              </div>
              <div className="video-content">
                <div className="image-container">
                  <img
                    src={playButtonPath}
                    alt="play"
                    onClick={this.handleVideoModal}
                  />
                </div>
              </div>
            </div>
          </StyledContainer>
        </div>
        <div className="product-details">
          <div className="product-details-container">
            <div className="top-content">
              <div className="rating">
                <img src={images.ratingIcon} className="icon" alt="rating" />
                <p>{product.rating}</p>
              </div>
              <div className="time">
                <img src={images.timeframeIcon} className="icon" alt="timeframe" />
                <p>{product.time}</p>
              </div>
              <div className="price-container">
                <div className="add-to-cart price-content">
                  <p>Add to cart</p>
                  <button
                    type="button"
                    id="add-to-cart"
                    onClick={this.handleClick}
                    className={cartHasItems ? 'price-button added' : 'price-button'}
                  >
                    {product.price}
                  </button>
                </div>
                <div className="checkout price-content">
                  <p>Checkout</p>
                  <Link to={homeUrl + "/cart"}>
                    <div className="button-container">
                      <button
                        type="button"
                        id="price-button"
                      >
                        <div className="cart-count">
                          <span>{cartHasItems ? 1 : null}</span>
                        </div>
                        <FaShoppingCart
                          className={shake ? 'shake' : ''}
                          onAnimationEnd={() => this.setState({ shake: false })}
                        />
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bottom-content">
              <div className="top bottom-content-paragraph">
                <h1>{product.p1Title}</h1>
                <p>{product.p1Description}</p>
              </div>
              <div className="requirements bottom-content-paragraph">
                <h1>{product.requirementTitle}</h1>
                <p>{product.requirements}</p>
              </div>
              <div className="description bottom-content-paragraph">
                <h1>{product.descriptionTitle}</h1>
                <ShowMoreText
                  lines={4}
                  anchorClass="read-more"
                >
                  <p>{product.description}</p>
                </ShowMoreText>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

const StyledContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => props.image});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

`;

ProductDetails.propType = {
  getData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.reducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
