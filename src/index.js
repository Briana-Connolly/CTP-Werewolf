import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import SeerScreen from './seerScreen.js';
import VillagerScreen from './villagerScreen.js';
import MasonScreen from './masonScreen.js';
import WerewolfScreen from './werewolfScreen.js';
import RobberScreen from './robberScreen.js';
import LoneWWScreen from './loneWWScreen.js';
import MinionScreen from './minionScreen.js';
import StartScreen from './start.js';
import HomeScreen from './home.js';

class App extends React.Component {

    render() {
        return <Router>
            <Switch>
                <Route path="/seer">
                    <  SeerScreen />
                </Route>
                <Route path="/villager">
                    <VillagerScreen />
                </Route>
                <Route path="/mason">
                    <MasonScreen />
                </Route>
                <Route path="/werewolf">
                    <WerewolfScreen />
                </Route>
                <Route path="/robber">
                    <RobberScreen />
                </Route>
                <Route path="/loneWW">
                    <LoneWWScreen />
                </Route>
                <Route path="/minion">
                    <MinionScreen />
                </Route>
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