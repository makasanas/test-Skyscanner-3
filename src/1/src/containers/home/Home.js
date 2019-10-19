import React, { Component } from 'react';
import Intro from '../../components/home/Intro';
import Services from '../../components/home/Services';
import About from '../../components/home/About';
import Features from '../../components/home/Features';
import Contact from '../../components/home/Contact';
import GetinTouch from '../../components/home/GetinTouch';
import Maps from '../../components/home/Maps';
import './Home.scss';

export default class home extends Component {
  render() {
    return (
      <div>
        <section className="landingPage">
        <Intro></Intro>
        </section>
        <section>
          <Services></Services>
        </section>
        <section>
          <About></About>
        </section>
        <section>
          <Features/>
        </section>
        <section>
          <Contact></Contact>
        </section>
        <section>
          <GetinTouch></GetinTouch>
        </section>
        <section>
          <Maps></Maps>
        </section>
      </div>
    )
  }
}
