import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './start.css'

//functionality needs to be added

function Players() {
    let numPlayers = 5;
    const roles = ['werewolf', 'minion', 'seer', 'robber', 'werewolf'];
    const newDivs = [];

    for (let i = 0; i < numPlayers; i++) {
        //might have to change this from role to player #
        if (roles[i] != 'robber') {
            newDivs.push(<button className="box">Player {i + 1}</button>);
        }
        console.log(newDivs);
    }
    return newDivs;
}


class RobberScreen extends React.Component {
    componentDidMount() {
        document.body.style.background = "#F8F7FA";
    }

    render() {
        return (
            <div className="minionScreen">
                <p className="title">You are the Robber</p>
                <p className="description">Pick Which Card You Would like to Rob</p>
                <br></br>
                <br></br>
                <div>{Players()}</div>
            </div >
        );
    }
}


export default RobberScreen;