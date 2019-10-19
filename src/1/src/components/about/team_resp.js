import React from 'react'
import { Link } from "react-router-dom";

class Team_resp extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            leftPos: 0,
            leftClass: "",

            midPos: 1,
            midClass: "active_card",

            rightPos: 2,
            rightClass: "",
        }
    }

    changeLeft = (e) => {
        let {leftPos, midPos} = this.state;
        if( leftPos === 0 && midPos === 1){
            this.setState({leftPos: 1, midPos: 0, leftClass: "selected", midClass: "mvLeft" })
        }
        if( leftPos === 1 && midPos === 0){
            this.setState({leftPos: 0, midPos: 1 ,leftClass: "", midClass: "active_card"})
        }
        if( leftPos === 0 && midPos === 2){
            this.setState({ midPos: 1, rightPos: 2, rightClass: "", midClass: "active_card"})
            this.setState({ leftPos: 1, midPos: 0 , leftClass: "selected", midClass: "mvLeft"})
        }
    }

    changeMid = (e) => {
        let {rightPos, midPos, leftPos} = this.state;
        if (midPos === 2 && rightPos === 1){
            this.setState({ midPos: 1, rightPos: 2, rightClass: "", midClass: "active_card"})
        }
        if (midPos === 0 && leftPos === 1){
            this.setState({ midPos: 1, leftPos: 0, leftClass: "", midClass: "active_card"})
        }
    }

    changeRight = (e) => {
        console.log(e.target);
        let {rightPos, midPos} = this.state;
        if( rightPos === 2 && midPos === 1){
            this.setState({rightPos: 1, midPos: 2 ,rightClass: "selectedR", midClass: "mvRight"})
        }
        if( rightPos === 1 && midPos === 2){
            this.setState({rightPos: 2, midPos: 1 ,rightClass: "", midClass: "active_card"})
        }
        if( rightPos === 2 && midPos === 0){
            this.setState({ midPos: 1, leftPos: 0, leftClass: "", midClass: "active_card"})
            this.setState({rightPos: 1, midPos: 2 ,rightClass: "selectedR", midClass: "mvRight"})
        }
    }

  render(){
    return (
        <div className="team_resp">
            <div className={"resp_card " + this.state.leftClass} >
                <div className="team-img-div">
                    {/* <img src={will2} className="resp_member" alt="team_member"/> */}
                    <div className="bgimg " onClick={this.changeLeft}></div>
                    <div>
                        CEO -1
                    </div>
                </div>
                <div className="card-details ">
                    <p>Some name</p>
                    <div className="team_resp_link">
                        <Link to="#"> <i className="fab fa-facebook-f"></i></Link>
                        <Link to="#"> <i className="fab fa-github"></i></Link>
                        <Link to="#"> <i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
            </div>
            <div className={"resp_card "  + this.state.midClass}>
                <div className="team-img-div">
                    {/* <img src={will2} className="resp_member" alt="team_member"/> */}
                    <div className="bgimg " onClick={this.changeMid}></div>

                    <div>
                        CEO 0
                    </div>
                </div>
                <div className="card-details">
                    <p>Some name</p>
                    <div className="team_resp_link">
                        <Link to="#"> <i className="fab fa-facebook-f"></i></Link>
                        <Link to="#"> <i className="fab fa-github"></i></Link>
                        <Link to="#"> <i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
            </div>
            <div className={"resp_card "+ this.state.rightClass}>
                <div className="team-img-div" onClick={this.changeRight}>
                    {/* <img src={will2} className="resp_member" alt="team_member"/> */}
                    <div className="bgimg "></div>
                    <div>
                        CEO 1
                    </div>
                </div>
                <div className="card-details">
                    <p>Some name</p>
                    <div className="team_resp_link">
                        <Link to="#"> <i className="fab fa-facebook-f"></i></Link>
                        <Link to="#"> <i className="fab fa-github"></i></Link>
                        <Link to="#"> <i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


export default Team_resp

