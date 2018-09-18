import React, {Component} from 'react';
import {connect} from 'react-redux';

class ChartComponent extends Component {

    renderList() {
        if (this.props.payload)
            return this.props.payload.map((num) => {
                return (
                    <li key={num}>
                        {num}
                    </li>
                );
            })
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        payload: state.randomNumbers.data
    }
}

export default connect(mapStateToProps)(ChartComponent);