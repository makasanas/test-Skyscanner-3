import React, { Component } from 'react'
import heading from './../../../../assets/images/heading.png'


export default class Packages extends Component {
  state = {
    number: 4,
    index: 1,
    left: 25,
    right: 75,
    modal:false
  }
  toggleModal=()=>{
      this.setState({modal:!this.state.modal});
  }
  updateLeftRight() {
    const left = (this.state.index ) / this.state.number * 100;
    this.setState({ left });
    const right = ((this.state.number - this.state.index ) / this.state.number) * 100;
    this.setState({ right });
  }
  next = () => {
    if (this.state.index < this.state.number) {
      document.getElementById('packages-background-clipper').className = `about-packages-clipped`;
      document.getElementById("packages-thumbnails-clipper1").className = `about-packages-clipped`;
      document.getElementById("packages-thumbnails-clipper2").className = `about-packages-clipped`;
      document.getElementById("packages-thumbnails-clipper3").className = `about-packages-clipped`;
      document.getElementById("packages-up").className = `fadeOutUp`;
      document.getElementById("packages-up2").className = `fadeOutUp`;
      document.getElementById("packages-down").className = `fadeOutDown`;
      document.getElementById("packages-down2").className = `fadeOutDown`;
      this.setState({ index: this.state.index + 1 }, () => {
        this.updateLeftRight();
        setTimeout(() => {
          document.getElementById("packages-background-clipper").className = ``;
          document.getElementById("packages-thumbnails-clipper1").className = ``;
          document.getElementById("packages-thumbnails-clipper2").className = ``;
          document.getElementById("packages-thumbnails-clipper3").className = ``;
          document.getElementById("packages-up").className = ``;
          document.getElementById("packages-up2").className = ``;
          document.getElementById("packages-down").className = ``;
          document.getElementById("packages-down2").className = ``;
        }, 2100);
      });
    } if (this.state.index === this.state.number) {
      this.setState({ index: 0 }, () => {
        this.next();
      });
    }
  }
  previous = () => {
    if (this.state.index >1) {
      document.getElementById('packages-background-clipper').className = `about-packages-clipped`;
      document.getElementById("packages-thumbnails-clipper1").className = `about-packages-clipped`;
      document.getElementById("packages-thumbnails-clipper2").className = `about-packages-clipped`;
      document.getElementById("packages-thumbnails-clipper3").className = `about-packages-clipped`;
      document.getElementById("packages-up").className = `fadeOutUp`;
      document.getElementById("packages-up2").className = `fadeOutUp`;
      document.getElementById("packages-down").className = `fadeOutDown`;
      document.getElementById("packages-down2").className = `fadeOutDown`;
      this.setState({ index: this.state.index - 1 }, () => {
        this.updateLeftRight();
        setTimeout(() => {
          document.getElementById("packages-background-clipper").className = ``;
          document.getElementById("packages-thumbnails-clipper1").className = ``;
          document.getElementById("packages-thumbnails-clipper2").className = ``;
          document.getElementById("packages-thumbnails-clipper3").className = ``;
          document.getElementById("packages-up").className = ``;
          document.getElementById("packages-up2").className = ``;
          document.getElementById("packages-down").className = ``;
          document.getElementById("packages-down2").className = ``;
        }, 2100);
      });
    } if (this.state.index === 1) {
      this.setState({ index: this.state.number+1 }, () => {

        this.previous();
      });
    }
  }
  render() {
    const leftArrow="<-";
    return (
      <div className="about-packages">
        {
          this.state.modal?(
            <div className="modal">
              <div className="modal-close">
                <h2 onClick={this.toggleModal}>X</h2>
              </div>
              <div className="modal-img">
                <img src={heading} alt="" />
              </div>
            </div>
          ):
          null
        }

       <div className="about-packages-details">
        <div className="about-packages-info">
          <h1 id="packages-up">Our Packages</h1>
          <h2 id="packages-up2">Basic Packages</h2>
          <p id="packages-down">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolorem, labore adipisci rem eum perferendis veniam, quisquam voluptate fugiat quidem libero quis voluptates sunt corporis unde totam ut. Deserunt eum et expedita veniam ratione beatae quaerat explicabo debitis corrupti rem. Dolorum ratione vitae porro vero vel eos voluptas nostrum possimus?
          </p>
          <button id="packages-down2">Check out</button>
        </div>

       <div className="about-packages-control">
            <button onClick={this.previous}>{leftArrow}</button>
            <div className="marker-lines">
              <div
                style={{
                  width: `${this.state.left}%`
                }}
                className="black-marker"
              ></div>
              <div
                style={{
                  width: `${this.state.right}%`
                }}
                className="white-marker"
              ></div>
            </div>
            <button onClick={this.next}>-></button>
       </div>
       </div>
      <div className="about-packages-images">
          <div className="about-packages-background">
            <div className="packages-background-container">
              <div id="packages-background-clipper">
                <img src={heading} alt="" />
              </div>
            </div>
          </div>
      <div className="about-packages-thumbnails">
        <div className="packages-thumbnails-container">
          <div id="packages-thumbnails-clipper1">
            <div><img src={heading} alt="" onClick={this.toggleModal}/></div>
          </div>
              <div id="packages-thumbnails-clipper2">
            <div><img src={heading} alt="" onClick={this.toggleModal}/></div>
          </div>
              <div id="packages-thumbnails-clipper3">
            <div><img src={heading} alt="" onClick={this.toggleModal}/></div>
          </div>
        </div>
      </div>

      </div>
      </div>
    )
  }
}
