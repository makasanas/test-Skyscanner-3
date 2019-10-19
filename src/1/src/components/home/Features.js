import React, { Component } from 'react'
import wifi from '../../../../assets/images/wifi.svg';
import school from '../../../../assets/images/school.svg';
import smiley from '../../../../assets/images/smiley.svg';

export default class Features extends Component {
  render() {
    return (
      <div className="features">
        <div className="features-containers">
          <div className="features-div">
            <img src={wifi} alt="" />
            <h3>Connect</h3>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur veniam quis vitae similique atque sunt ea deleniti
              ipsam doloremque quisquam adipisci numquam cupiditate recusandae
              mollitia blanditiis minima, repudiandae perferendis quos?
            </h4>
          </div>
          <div className="features-div">
            <img src={school} alt="" />
            <h3>Learing</h3>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              rem ipsam dolore consectetur molestiae. Rem possimus dignissimos
              voluptate enim quisquam dolores eum consequatur harum, aperiam
              cumque laboriosam cum, commodi expedita.
            </h4>
          </div>
          <div className="features-div">
            <img src={smiley} alt="" />
            <h3>Satisfaction</h3>
            <h4>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              corporis eos natus quo quaerat itaque quod obcaecati, molestias,
              ipsum ipsam incidunt sequi deleniti ullam consectetur inventore?
              Dolorum, ullam amet! Nulla!
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
