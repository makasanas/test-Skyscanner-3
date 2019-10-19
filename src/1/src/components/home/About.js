import React, { Component } from 'react'
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./about.scss";

export default class About extends Component {

  componentDidMount(){
    AOS.init();
  }

  render() {
    return (
      <div className="aboutUs">
        <div className="about-container">
          <div className="left-half" data-aos="fade-right">
            <h1 className="left-heading">What&nbsp;we&nbsp;do</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel asperiores, animi quod maxime magnam facilis assumenda. Repudiandae corporis, quaerat amet consequuntur porro autem ipsam officiis reprehenderit deleniti illum accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi dolore laudantium saepe accusamus dolorum velit, porro esse culpa unde consequatur. Rem culpa incidunt minus odio veniam alias assumenda sunt non! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui reiciendis rem veniam est ad. Cumque, reprehenderit accusantium! Delectus ratione obcaecati neque iusto ipsam quae quisquam, officia aliquid, nisi, voluptatum vel!</p>
          </div>
          <div className="right-half" data-aos="fade-left">
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam numquam maxime repellendus quo temporibus, delectus unde animi quae a voluptates! Ipsum, labore odio! Dignissimos repellendus quaerat laborum voluptate aliquam quae!</p>
            <Link to="/about"> <button className="read-moreBtn">Read more</button></Link>
          </div>
        </div>
      </div>
    );
  }
}
