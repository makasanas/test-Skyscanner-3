import React from 'react';
import TeamFull from './team_full';
import TeamResp from './team_resp';
import './team.scss';

class Team extends React.Component{
    constructor(){
        super();
        this.state={
        }
    }               

    render(){
        return (
            <div id="team-container">
                <div className="headingContainer">
                    <h1>Travel its fun</h1>
                    <h2>About the team</h2>
                </div>
                <TeamFull/>
                <TeamResp/>
            </div>
        );
    }
}

export default Team;