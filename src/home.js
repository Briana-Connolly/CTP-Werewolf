import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './index.css'

import logo from './images/WWLogo.png'


class HomeScreen extends React.Component {
    componentDidMount() {
        document.body.style.background = "#42033D";
    }
    render() {
        return (
            <div>
                <img src={logo} alt="WW logo" height="300" width="700"></img>
                <br></br>
                <br></br>
                <Link to="/start" className="btn btn-primary">Start Game</Link>
            </div>
        );
    }
}

export default HomeScreen