import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ChartComponent from "./components/ChartComponent";

class App extends Component {

    loadChartComponent = false;

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    loadData() {
        // fetch("https://api.random.org/json-rpc/1/invoke")
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

                {this.loadChartComponent ? <ChartComponent/> : null}
            </div>
        );
    }
}

export default connect()(App);
