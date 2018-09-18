import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import ChartComponent from "./components/ChartComponent";
import {saveDataPoints} from "./actions";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    getRequestBody() {
        const params = {
            id: 2000,
            jsonrpc: "2.0",
            method: "generateSignedIntegers",
            params: {
                apiKey: "22d544fe-e351-4b58-b7ff-392df9e99e0b",
                base: 10,
                max: 1000,
                min: -100,
                n: this.state.count
            }
        };
        return JSON.stringify(params);
    }

    loadData() {
        fetch("https://api.random.org/json-rpc/1/invoke", {
            method: 'POST',
            body: this.getRequestBody()
        }).then(data => data.json())
            .then(data => {
                console.log(data.result.random.data);
                this.props.dispatch(saveDataPoints(data.result.random.data));
            });
    }

    handleInputChange(event) {
        this.setState({count: event.target.value});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome</h1>
                </header>
                <p className="App-intro">
                    <input className="myinput"
                           type="number"
                           placeholder="Enter a number"
                           onChange={this.handleInputChange.bind(this)}/>
                    <input type="button"
                           className="mybtn"
                           value="Load"
                           onClick={this.loadData.bind(this)}/>
                </p>
                <ChartComponent/>
            </div>
        );
    }
}

export default connect()(App);
