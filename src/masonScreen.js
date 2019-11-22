import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './start.css'

function Players() {
    let numPlayers = 6;
    const roles = ['werewolf', 'mason', 'seer', 'mason', 'werewolf', 'robber'];
    const newDivs = [];

    //stil shows the player on the screen
    for (let i = 0; i < numPlayers; i++) {
        if (roles[i] != 'werewolf') {
            newDivs.push(<div className='box'> Player {i + 1} </div >);
        }
        else if (roles[i] == 'werewolf') {
            newDivs.push(<div className='redBlock'> Player {i + 1} </div >);
        }
    }
    console.log(newDivs);

    return newDivs;
}

class MasonScreen extends React.Component {
    componentDidMount() {
        document.body.style.background = "#F8F7FA";
    }

    render() {
        return (
            <div className="minionScreen">
                <p className="title">You are the Mason</p>
                <p className="description">All red cards are the Mason</p>
                <br></br>
                <br></br>
                <div>{Players()}</div>
            </div>
        );
    }
}

export default MasonScreen;