import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './index.css'
import { Redirect } from 'react-router';


import logo from './images/WWLogo.png'

class HomeScreen extends React.Component {
    componentDidMount() {
        document.body.style.background = "#42033D";
    }

    constructor(props) {
        super(props);
        this.state = {
            playerName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ playerName: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.playerName);
        this.props.history.push('/start');
    }

    render() {

        return (
            <div>
                <img src={logo} alt="WW logo" height="300" width="700"></img>
                <br></br>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Enter Name" onChange={(event) => this.handleChange(event)}></input>
                    <input type="submit" value="Start Game" />
                </form>
                <br></br>
            </div >
        );
    }
}

export default withRouter(HomeScreen);

