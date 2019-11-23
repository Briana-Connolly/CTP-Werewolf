import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './start.css'

//need to add functionality that once a button is clicked no other buttons can be clicked

function displayResult(num) {
    console.log();
    const middle = ['werewolf', 'minion', 'villager'];
    const result = middle[num - 1];

    return result;
}


class LoneWWScreen extends React.Component {
    componentDidMount() {
        document.body.style.background = "#F8F7FA";
    }

    constructor(props) {
        super(props)
        this.state = { show: false };
        this.state.b = 0;

        this.toggleDiv = this.toggleDiv.bind(this)

        this.state = {
            isButtonDisabled: false
        }
    }

    toggleDiv = (num) => {
        this.state.b = num;
        const { show } = this.state;
        this.setState({ show: !show })

        this.setState({
            isButtonDisabled: true
        });
    }

    render() {
        return (
            <div className="minionScreen">
                <p className="title">You are the only Werewolf</p>
                <p className="description">Pick which card from the middle you would like to see</p>
                <br></br>
                <br></br>
                <button className="box"
                    onClick={() => this.toggleDiv(1)}
                    disabled={this.state.isButtonDisabled}>Middle 1</button>
                <button className="box"
                    onClick={() => this.toggleDiv(2)}
                    disabled={this.state.isButtonDisabled}>Middle 2</button>
                <button className="box"
                    onClick={() => this.toggleDiv(3)}
                    disabled={this.state.isButtonDisabled}>Middle 3</button>
                <br></br>
                <br></br>
                <div className="result">{this.state.show && displayResult(this.state.b)}</div>
            </div >
        );
    }
}


export default LoneWWScreen;
