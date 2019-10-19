import React, { Component } from "react";
import second from './../../../../assets/images/second.png'

export default class Intro extends Component {
  state={
    number:4,
    index:1,
    left:25,
    right:75
  }
increaseCount(){
const left=(this.state.index) / this.state.number*100;
this.setState({left});
const right = ((this.state.number -this.state.index) / this.state.number) * 100;
this.setState({right});
}
  next=()=>{

    if(this.state.index<this.state.number){
      document.getElementById('thumbnail').className = `thumbnailclipped`;
      document.getElementById("background").className = `backgroundclipped`;
      document.getElementById("about-up").className = `fadeOutUp`;
      document.getElementById("about-up2").className = `fadeOutUp`;
      document.getElementById("about-down").className = `fadeOutDown`;
     this.setState({ index: this.state.index + 1 },()=>{
       this.increaseCount();
       setTimeout(() => {
         document.getElementById("thumbnail").className = ``;
         document.getElementById("background").className = ``;
        //  document.getElementById("about-up").className = ``;
         document.getElementById("about-up").className = ``;
         document.getElementById("about-up2").className = ``;
         document.getElementById("about-down").className = ``;
       }, 2100);
     });
    }
    if (this.state.index === this.state.number) {
      this.setState({ index: 0 },()=>{

        this.next();
      });
    }
  }

  previous=()=>{
    if (this.state.index >1) {
      document.getElementById('thumbnail').className = `thumbnailclipped`;
      document.getElementById("background").className = `backgroundclipped`;
      document.getElementById("about-up").className = `fadeOutUp`;
      document.getElementById("about-up2").className = `fadeOutUp`;
      document.getElementById("about-down").className = `fadeOutDown`;
      this.setState({ index: this.state.index - 1 }, () => {
        this.increaseCount();
        setTimeout(() => {
          document.getElementById("thumbnail").className = ``;
          document.getElementById("background").className = ``;
          document.getElementById("about-up").className = ``;
          document.getElementById("about-up2").className = ``;
          document.getElementById("about-down").className = ``;
        }, 2100);
      });
    }
    if (this.state.index === 1) {
      this.setState({ index: this.state.number+1 }, () => {
        this.previous();
      });
    }
  }
  render() {
    const rightArrow='<-'
    return (
      <div className="about-intro">
        <aside className="social-sidebar">
          <div>
            <hr />
          </div>
          <div className="buttonWrapper">
            <svg
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="github hello"
            >
              <path
                className="github-path"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                fill="#fff"
              />
            </svg>
            <div className="shine"></div>
          </div>
          <div className="buttonWrapper">
            <svg
              className="facebook"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="facebook-path"
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                fill="#fff"
              />
            </svg>
            <div className="shine"></div>
          </div>
          <div className="buttonWrapper">
            <svg
              clipRule="evenodd"
              fillRule="evenodd"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="gmail"
            >
              <path
                className="gmail-path"
                d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.001 16.917c.552 0 .999-.448.999-.999v-7.919c0-.551-.448-.999-.999-.999h-12.002c-.551 0-.999.448-.999.999v7.919c0 .551.448.999.999.999h12.002zm-6.001-3.55l-5.45-3.782-.011 6.748h10.899v-6.748l-5.438 3.782zm5.174-5.784c-1.527 1.064-5.174 3.634-5.174 3.634l-5.203-3.634h10.377z"
                fill="#fff"
              />
            </svg>
            <div className="shine"></div>
          </div>
          <div>
            <hr />
          </div>
        </aside>
        <div className="hero-about">
          <div className="hero-about-details">
            <div className="hero-about-header">
              <h1 id="about-up">HELLO</h1>
              <h2 id="about-up2">WHO ARE WE</h2>
              <p id="about-down">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                maiores ducimus, sint veritatis quibusdam aliquid ratione nihil
                asperiores molestiae commodi repudiandae consequuntur molestias
                soluta id, explicabo illum corrupti et non. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Eveniet quod id ipsum
                molestias porro sed debitis sint vitae, ea, quasi culpa
                provident voluptas cupiditate vero. Explicabo architecto culpa
                quae ratione.
              </p>
            </div>
            <div className="hero-about-button">
              <button onClick={this.previous}>{rightArrow}</button>
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
          <div className="hero-about-images">
            <div className="hero-about-thumbnail">
              <div className="thubnailbaseline">
                <div id="thumbnail">
                  <img src={second} alt="" />
                </div>
              </div>
            </div>
            <div className="hero-about-background">
              <div className="backgroundbaseline">
                <div id="background">
                  <img src={second} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
