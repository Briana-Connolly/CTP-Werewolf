import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './start.css'

class SeerScreen extends React.Component {
    componentDidMount() {
        document.body.style.background = "#F8F7FA";
    }

    render() {
        return (
            <div className="minionScreen">
                <p className="title">You are the Seer</p>
                <p className="description">Pick which player you want to see or Pick to see 2 cards from the middle</p>
            </div >
        );
    }
}


export default SeerScreen;