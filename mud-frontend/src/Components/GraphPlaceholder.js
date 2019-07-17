import React, {Component} from 'react';
import {Card} from 'primereact/card';
import Arrows from './Arrows'

class GraphPlaceholder extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render(){
    return (
        <div className="placeholder">
            <Card title="Graph" className="placeholder">
                <h2>Graph Goes Here </h2>
                <Arrows goSouth={this.props.goSouth()}/>
            </Card>
        </div>
    )}
}

export default GraphPlaceholder;