import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './start.css'

class VillagerScreen extends React.Component {
    componentDidMount() {
        document.body.style.background = "#F8F7FA";
    }

    render() {
        return (
            <div className="minionScreen">
                <p className="title">You are the Villager</p>
                <p className="description">You have no night action</p>
            </div >
        );
    }
}


export default VillagerScreen;