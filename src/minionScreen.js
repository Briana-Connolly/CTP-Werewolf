import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './start.css'

function Players() {
    let numPlayers = 5;
    const roles = ['werewolf', 'minion', 'seer', 'villager', 'werewolf'];
    const newDivs = [];

    for (let i = 0; i < numPlayers; i++) {
        if (roles[i] != 'minion' && roles[i] != 'werewolf') {
            newDivs.push(<div className='box'> Player {i + 1} </div >);
        }
        else if (roles[i] == 'werewolf') {
            newDivs.push(<div className='redBlock'> Player {i + 1} </div >);
        }
    }
    console.log(newDivs);

    return newDivs;
}


class MinionScreen extends React.Component {
    componentDidMount() {
        document.body.style.background = "#F8F7FA";
    }

    render() {
        return (
            <div className="minionScreen">
                <p className="title">You are the minion</p>
                <p className="description">All the red cards are the werewolf</p>
                <br></br>
                <br></br>
                <div>{Players()}</div>
            </div>
        );
    }
}

export default MinionScreen;