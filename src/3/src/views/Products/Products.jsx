import React from 'react';
import {
  get, debounce, filter, matches,
} from 'lodash';
import './products.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Slider from '../../components/Slider';
import DestinationCard from '../../components/Cards/DestinationCard';
import SearchCard from '../../components/Cards/SearchCard';
// state
import { getData } from '../../redux/actions/index';
// images
import Learn from './../../../../assets/images/learnIcon.webp';
import Cheap from './../../../../assets/images/cheapIcon.webp';
import Confused from './../../../../assets/images/confusedIcon.webp';
import Categories from './../../../../assets/images/categoriesIcon.webp';
import ProfileCard from '../../components/Cards/ProfileCard';
import ReviewCard from '../../components/Cards/ReviewCard';
import Dropdown from '../../components/DropDown';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedDestinations: [],
      isCategoryModalOpen: false,
      searchText: '',
      categories: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleClickOutsideModal = this.handleClickOutsideModal.bind(this);
    this.handleDropDownClick = this.handleDropDownClick.bind(this);
    this.searchRef = React.createRef();
  }

  componentDidMount() {
    this.props.getData();
    this.handleSearch = debounce(this.handleSearch, 1000);
  }

  handleSearch(searchText) {
    this.setState({
      searchText,
    });
    if (searchText) {
      const results = filter(this.props.data.destination, matches({ trendingName: searchText }));
      if (results.length > 0) {
        this.setState({
          searchedDestinations: results,
        });
      }
      // handle scrolling after search
      this.searchRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  handleClickOutsideModal() {
    this.setState({
      isCategoryModalOpen: false,
    });
  }

  handleDropDownClick(e) {
    e.stopPropagation();
    const destinations = get(this.props.data, 'destination', []);
    this.setState({
      categories: destinations,
      isCategoryModalOpen: false,
    });
  }

  renderSearchResults() {
    const { searchText, searchedDestinations } = this.state;
    const product = get(this.props.data, 'product', {});
    return (
      <div className="search" ref={this.searchRef}>
        {
          searchText
            && (
              searchedDestinations.length > 0
                ? (
                  <div className="search-results">
                    <div className="search-results-container">
                      <div className="search-results-title">
                        <h4>Search Results</h4>
                      </div>
                      <div className="featured-content">
                        <h1>Featured Content</h1>
                        <SearchCard item={product} />
                      </div>
                      <span className="search-counter">{`${searchedDestinations.length} results for your search "${searchText}"`}</span>
                      {searchedDestinations.map((item, i) => (i === 3 ? <div className="highlighted-search">This is for recommended area</div> : (
                        <Link className="slide" to={'/courses/'+i} key={i}>
                          <SearchCard item={item} />
                        </Link>
                      )))}
                    </div>
                  </div>
                )
                : (
                  <div className="search-results">
                    <div className="search-results-container">
                      <div className="search-results-title">
                        <h4>Search Results</h4>
                      </div>
                      <h4>No result found</h4>
                    </div>
                  </div>
                )
            )
        }
      </div>
    );
  }

  renderFooter() {
    return (
      <div className="footer-container">
        <div className="learn footer-item">
          <img src={Learn} alt={Learn} />
          <div className="content">
            <h1>Learn</h1>
            <p>Explore and discover</p>
          </div>
        </div>
        <div className="cheap footer-item">
          <img src={Cheap} alt={Cheap} />
          <div className="content">
            <h1>Cheap</h1>
            <p>Easy and cheap</p>
          </div>
        </div>
        <div className="confused footer-item">
          <img src={Confused} alt={Confused} />
          <div className="content">
            <h1>Confused?</h1>
            <p>They will guide you</p>
          </div>
        </div>
      </div>
    );
  }

  renderSlider() {
    const destinations = get(this.props.data, 'destination', []);
    return (
      <Slider>
        {destinations.map((item, i) => (
          <Link to={"/courses/"+i} className="slide" key={i}>
            <DestinationCard item={item} small />
          </Link>
        ))}
      </Slider>
    );
  }

  renderCategories() {
    const categories = get(this.props.data, 'categories', []);
    const { isCategoryModalOpen, searchText } = this.state;
    return (
      <div className="category-search">
        <div className="category-content">
          <img
            src={Categories}
            alt="categories"
            onClick={() => this.setState({ isCategoryModalOpen: !isCategoryModalOpen })}
          />
          <p className="category-text">Categories</p>
        </div>
        <div className="category-search-input">
          <Input
            search
            placeholder="Check out"
            onChange={(e) => this.handleSearch(e.target.value)}
            value={searchText}
          />
        </div>
        {isCategoryModalOpen && (
          <div className="dropdown">
            <Dropdown
              items={categories}
              handleOutsideClick={this.handleClickOutsideModal}
              handleOnClick={this.handleDropDownClick}
            />
          </div>
        )}
      </div>
    );
  }

  renderCategoryItems() {
    const { categories } = this.state;
    return (
      <div className="category-items">
        {
          categories.length > 0 && (
            <div>
              <div className="category-items-title">
                <h4>Category Title</h4>
              </div>
              <Slider category>
                {categories.map((item, i) => (
                  <Link to="/products/1" className="slide" key={i}>
                    <DestinationCard item={item} small />
                  </Link>
                ))}
              </Slider>
            </div>
          )
        }
      </div>
    );
  }

  
  render() {
    const productContent = get(this.props.data, 'productContent', {});
    const backpackers = get(this.props.data, 'backpackers', []);
    const destinations = get(this.props.data, 'destination', []);
    const reviews = get(this.props.data, 'reviews', []);
    const { searchText } = this.state;
    return (
      <div className="products-wrapper wrapper">
        <div className="products-bg">
          <div className="products-content-container container">
            <div className="content">
              <div className="title">
                <p>Explore travels</p>
              </div>
              <div className="description">
                <p>
                  {productContent.description1}
                </p>
                <p>
                  {productContent.description2}
                </p>
              </div>
            </div>
            <div className="search-input">
              <Input
                placeholder="Check out"
                search
                onChange={(e) => this.handleSearch(e.target.value)}
                value={searchText}
              />
            </div>
          </div>
        </div>
        <div className="first-page-footer">
          {this.renderFooter()}
        </div>


        <div className="second-page-container">
          <div className="trending-section">
            <div className="trending-title">
              <h1>Trending destinations</h1>
            </div>
            <div className="trending-slider">
              {
                destinations.length
                  ? this.renderSlider()
                  : <p>No destinations</p>
              }
            </div>
          </div>
          <div className="categories">
            <div className="categories-container">
              {this.renderCategories()}
              {this.renderCategoryItems()}
              {this.renderSearchResults()}
            </div>
          </div>
          <div className="top-backpackers">
            <div className="top-backpackers-container">
              <div className="top-backpackers-title">
                <p>Top backpackers</p>
              </div>
              <div className="top-backpackers-profile">
                {
                  backpackers.map((item, i) => (
                    <ProfileCard profile={item} key={i} />
                  ))
                }
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="reviews-container">
              <div className="reviews-title">
                <p>Reviews from other backpackers</p>
              </div>
              <div className="reviews-profile">
                {
                  reviews.map((item, i) => (
                    <ReviewCard review={item} key={i} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Products.propType = {
  getData: PropTypes.func.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
});

const mapStateToProps = (state) => ({
  data: state.reducer.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
