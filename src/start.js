import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import logo from './images/WWLogo.png'


class StartScreen extends React.Component {
    componentDidMount() {
        document.body.style.background = "#42033D";
    }
    render() {
        return (
            <div>
                <div>
                    <Link to="/minion" className="btn btn-primary">Minion</Link>
                </div>
                <br></br>
                <div>
                    <Link to="/loneWW" className="btn btn-primary">Lone WW</Link>
                </div>
                <br></br>
                <div>
                    <Link to="/robber" className="btn btn-primary">Robber</Link>
                </div>
            </div>
        );
    }
}

export default StartScreen
