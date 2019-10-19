import React, { Component } from 'react';
import BlogScroller from './discoverSlider/blogScroller';
import "./services.scss";

export default class Services extends Component {

  constructor(props){
    super(props);
    this.state={
      index: 0,
      maxIndex: 2,          
      translateValue: 0,
      spantranslateValue: 0
    }
  }

  goToPrevSlide = () => {
    const {translateValue: value, spantranslateValue: spanValue, index } = this.state;
    if(index !== 0) {
      this.setState({translateValue: Number(value) + Number("14.3"), spantranslateValue: Number(spanValue) + Number("-100"), index: index-1});
    }
  }

  goToNextSlide = () => {
    const {translateValue: value, spantranslateValue: spanValue, index, maxIndex} = this.state;
    if(index !== maxIndex ) {
      this.setState({translateValue:  Number(value) + Number("-14.3"), spantranslateValue: Number(spanValue) + Number("100"), index: index+1});
    }
  }

  render() {
    return (
      <div className="section-container discover">
        <div className="heading-container discover">
          <h3>Our services</h3>
          <h1>Discover&nbsp;&&nbsp;Explore</h1>
        </div>
        <div className="slider discover blog-slider">
          <div>
            <span><i className="fas fa-chevron-left fa-2x" aria-hidden="true" id="arrow-left" onClick={this.goToPrevSlide}></i></span>
            <div className="slider-div">
              <span className="slider-span" style={{
                transform: `translate(${Number(this.state.spantranslateValue)}%, -12px)`
              }}></span>
            </div>
            <span><i className="fas fa-chevron-right fa-2x" aria-hidden="true" id="arrow-right" onClick={this.goToNextSlide}></i></span>
          </div>
        </div>
        <div className="card-container discover blog-slider" style={{
          transform: `translateX(${Number(this.state.translateValue)}%)`
        }}>

          <div className="card discover">
            <div className="front discover">
              <div className="front-comp">
                <div className="front-details">
                  <h2>BLOG</h2>
                  <p>Read today's blog</p>
                </div>
                {/* <img src="https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&h=1050&w=1260" alt=""/> */}
              </div>
            </div>
            <div className="back discover">
              <div className="back-content discover">
                <h2>Title</h2>
                <span>Desciption</span>
                <div className="sm">
                  <button>Check now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card discover">
            <div className="front discover">
              <div className="front-comp">
                <div className="front-details">
                  <h2>BLOG</h2>
                  <p>Read today's blog</p>
                </div>
                {/* <img src="https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/> */}
              </div>
            </div>
            <div className="back discover">
              <div className="back-content discover">
                <h2>Title</h2>
                <span>Desciption</span>
                <div className="sm">
                  <button>Check now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card discover">
            <div className="front discover">
              <div className="front-comp">
                <div className="front-details">
                  <h2>BLOG</h2>
                  <p>Read today's blog</p>
                </div>
                {/* <img src="https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/> */}
              </div>
            </div>
            <div className="back discover">
              <div className="back-content discover">
                <h2>Title</h2>
                <span>Desciption</span>
                <div className="sm">
                  <button>Check now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card discover">
            <div className="front discover">
              <div className="front-comp">
                <div className="front-details">
                  <h2>BLOG</h2>
                  <p>Read today's blog</p>
                </div>
                {/* <img src="https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/> */}
              </div>
            </div>
            <div className="back discover">
              <div className="back-content discover">
                <h2>Title</h2>
                <span>Desciption</span>
                <div className="sm">
                  <button>Check now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card discover">
            <div className="front discover">
              <div className="front-comp">
                <div className="front-details">
                  <h2>BLOG</h2>
                  <p>Read today's blog</p>
                </div>
                {/* <img src="https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/> */}
              </div>
            </div>
            <div className="back discover">
              <div className="back-content discover">
                <h2>Title</h2>
                <span>Desciption</span>
                <div className="sm">
                  <button>Check now</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <BlogScroller/>
      </div>
    )
  }
}
