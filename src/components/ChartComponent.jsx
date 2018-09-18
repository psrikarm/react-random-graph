import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs';

class ChartComponent extends Component {

    constructor() {
        super();
    }

    formatDate(date) {
        let hours = date.getHours();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let day = date.getDate();
        let month = date.getMonth() + 1;
        return month + "/" + day + " " + hours + ampm;
    }

    calculateHours() {
        let hours = [];
        let length = this.props.payload ? this.props.payload.length : 0;
        for (let i = 0; i < length; i++) {
            let temp = new Date(this.props.startTime);
            temp.setHours(temp.getHours() - i);
            hours.push(this.formatDate(temp));
        }
        return hours;
    }

    getGraphData() {
        return {
            labels: this.calculateHours(),
            datasets: [
                {
                    label: "Dataset",
                    pointColor: "#f00",
                    fillColor: "rgba(0,0,0,0)",
                    strokeColor: "#00c3ff",
                    data: this.props.payload
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Line data={this.getGraphData()} width={window.innerWidth * 0.75} height={window.innerHeight / 2}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        payload: state.randomNumbers.data,
        startTime: state.randomNumbers.time
    }
}

export default connect(mapStateToProps)(ChartComponent);