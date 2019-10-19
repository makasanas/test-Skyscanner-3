import React, { Component } from 'react';
import mobileHome from '../../../../assets/images/mobileHome.svg';
import emailHome from '../../../../assets/images/emailHome.svg';
import locationHome from '../../../../assets/images/locationHome.svg';

export default class GetinTouch extends Component {
  render() {
    return (
      <div className="GetinTouch" id='getInTouch'>
        <div className="touch-container">
          <div className="touch-headers">
            <h1>Get in Touch</h1>
          </div>

          <div className="touch-div touch-upper" data-aos="fade-up">
            <div className="touch-component" >
              <img src={mobileHome} alt="" />
              <h3>000</h3>
            </div>
            <div className="touch-component">
              <img src={emailHome} alt="" />
              <h3>SomeEmail@email.com</h3>
              <h3 className="get-detail">support@email.com</h3>
            </div>
            <div className="touch-component">
              <img src={locationHome} alt="" />
              <h3>Some address</h3>
              <h3 className="get-detail">3101 cape town USA</h3>
            </div>
          </div>
          <div className="form-container">
            <div className="form">
              <h2>Don't hesitate to send us any questions you may have</h2>
              <form action="">
                <input type="email" placeholder="Email" required />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  minLength="4"
                  maxLength="20"
                />
                <input type="text" placeholder="Subject" required
                minLength="2"
                maxLength="25"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  minLength="2"
                ></textarea>
                <input
                  className="GetinTouch-submit"
                  type="submit"
                  value="SEND"
                />
              </form>
            </div>
          </div>

          <div className="touch-div touch-lower" data-aos="fade-up">
            <div className="touch-component" >
              <img src="./images/mobileHome.svg" alt="" />
              <h3>000</h3>
            </div>
            <div className="touch-component">
              <img src="./images/emailHome.svg" alt="" />
              <h3>SomeEmail@email.com</h3>
              <h3 className="get-detail">support@email.com</h3>
            </div>
            <div className="touch-component">
              <img src="./images/locationHome.svg" alt="" />
              <h3>Some address</h3>
              <h3 className="get-detail">3101 cape town USA</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
