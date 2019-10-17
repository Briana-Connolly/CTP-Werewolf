import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


import StartScreen from './start.js';
import HomeScreen from './home.js';

class App extends React.Component {

    render() {
        return <Router>
            <Switch>
                <Route path="/start">
                    <StartScreen />
                </Route>
                <Route path="/">
                    <HomeScreen />
                </Route>
            </Switch>
        </Router>
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("root") //looking for one single tag to be the root
);