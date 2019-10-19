import React, { Component } from "react";
import { Link } from "react-router-dom";
import './header.scss';
import logo from '../../../../assets/images/logo.png';
import menu from '../../../../assets/images/menu.svg';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      buttonMenu: false
    }
  }
  toggleMenu = () => {
    console.log('ran');
    this.setState({ buttonMenu: !this.state.buttonMenu });
  }
  render() {
    return (
      <header className="header">
        <nav className="navigation">
          <ul className="routes">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <a href="/#getInTouch">CONTACT</a>
            </li>
            <li className="navigation-logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li id="about">
              <div >PRODUCTS</div>
              <ul className="dropdown" id="dropdown">
                <li>
                  <Link to="/forum">Forum</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="signIn">
            <li>
              <Link to="/login">SIGN IN</Link>
            </li>
          </ul>
        </nav>
        <nav className="mobile-navbar">
          <div className="mobile-logo">
            <img src={logo} alt="" />
          </div>
          <div className="mobile-menu">
            <button onClick={this.toggleMenu}>
              <img src={menu} alt="" />
            </button>
          </div>
        </nav>
        {this.state.buttonMenu ? (
          <div className="mobile-fullmenu">
            <div className="mobile-close">
              <h2 onClick={this.toggleMenu}>X</h2>
            </div>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <a href="/#getInTouch">CONTACT</a>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li id="products">
                PROUDCTS
              <ul id="dropdown2">
                  <li>
                    <Link to="/forum">Forum</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/courses">Courses</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/login">SIGN IN</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </header>
    );
  }
}
