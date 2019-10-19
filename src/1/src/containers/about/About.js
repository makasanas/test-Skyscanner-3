import React, { Component } from 'react'
import Intro from "../../components/about/Intro";
import Packages from "../../components/about/Packages";
import Team from "../../components/about/team";
import "./About.scss";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="landing-about">
        <Intro></Intro>
        </section>
        <section>
          <Team></Team>
        </section>
        <section>
          <Packages></Packages>
        </section>
      </div>
    )
  }
}
