import React from 'react';
import { Link } from "react-router-dom";

function Team_full(props) {
    return (
    <div className="Tcard-container">
        <div className="Tcard">
            <div className="Tfront">
                {/* <img src={will1} alt=""/> */}
                <div className="ceo">
                    CEO
                </div>
            </div>
            <div className="Tback">
                <div className="Tback-content">
                    {/* <img src={will2} alt=""/> */}
                    <div className="ceo">
                        CEO
                    </div>
                    <div className="bottom-text">
                        <p>Some Name</p>
                        <div>
                            <Link to="#"> <i className="fab fa-facebook-f"></i></Link>
                            <Link to="#"> <i className="fab fa-github"></i></Link>
                            <Link to="#"> <i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="Tcard">
            <div className="Tfront">
                {/* <img src={will1} alt=""/> */}
                <div className="ceo">
                    CEO
                </div>
            </div>
            <div className="Tback">
                <div className="Tback-content">
                    {/* <img src={will2} alt=""/> */}
                    <div className="ceo">
                        CEO
                    </div>
                    <div className="bottom-text">
                        <p>Some Name</p>
                        <div>
                            <Link to="#"> <i className="fab fa-facebook-f"></i></Link>
                            <Link to="#"> <i className="fab fa-github"></i></Link>
                            <Link to="#"> <i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="Tcard">
            <div className="Tfront">
                {/* <img src={will1} alt=""/> */}
                <div className="ceo">
                    CEO
                </div>
            </div>
            <div className="Tback">
                <div className="Tback-content">
                    {/* <img src={will2} alt=""/> */}
                    <div className="ceo">
                        CEO
                    </div>
                    <div className="bottom-text">
                        <p>Some Name</p>
                        <div>
                            <Link to="#"> <i className="fab fa-facebook-f"></i></Link>
                            <Link to="#"> <i className="fab fa-github"></i></Link>
                            <Link to="#"> <i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Team_full;
