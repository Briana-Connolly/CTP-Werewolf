import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './start.css'

// Need to fix buttons

class SeerScreen extends React.Component {
    componentDidMount() {
        document.body.style.background = "#F8F7FA";
    }

    constructor() {
        super();

        this.state = {
            playerClicked: false,
            middleClicked: false
        };


        this.handlePlayerClick = this.handlePlayerClick.bind(this);
        this.handleMiddleClick = this.handleMiddleClick.bind(this);
    }

    handlePlayerClick() {
        this.setState({
            playerClicked: true,
        });
    }

    handleMiddleClick() {
        this.setState({
            middleClicked: true,
        });
    }

    render() {
        return (
            <div className="minionScreen">
                <p className="title">You are the Seer</p>
                <p className="description">Pick which player you want to see or Pick to see 2 cards from the middle</p>
                <br></br>
                <br></br>
                {this.state.playerClicked ? (
                    <PlayerSeerScreen />
                ) : (
                        <button className="box" onClick={this.handlePlayerClick}> Player </button>
                    )}
                {this.state.middleClicked ? (
                    <MiddleSeerScreen />
                ) : (
                        <button className="box" onClick={this.handleMiddleClick}> Middle </button>
                    )}
            </div >
        );
    }
}

function Players() {
    let numPlayers = 5;
    const roles = ['werewolf', 'minion', 'seer', 'robber', 'werewolf'];
    const newDivs = [];

    for (let i = 0; i < numPlayers; i++) {
        //might have to change this from role to player #
        if (roles[i] != 'seer') {
            newDivs.push(<button className="box">Player {i + 1}</button>);
        }
        console.log(newDivs);
    }
    return newDivs;
}

class PlayerSeerScreen extends React.Component {
    componentDidMount() {
        document.body.style.background = "#F8F7FA";
    }

    render() {
        return (
            <div className="minionScreen">
                <div>{Players()}</div>
                <br></br>
                {/* <div className="result">{Players()}</div> */}
            </div >
        );
    }
}

class MiddleSeerScreen extends React.Component {
    componentDidMount() {
        document.body.style.background = "#F8F7FA";
    }

    render() {
        return (
            <div className="minionScreen">
                <button className="box" >Middle 1</button>
                <button className="box">Middle 2</button>
                <button className="box">Middle 3</button>
                {/* <div className="result">{Players()}</div> */}
            </div >
        );
    }
}


export default SeerScreen;