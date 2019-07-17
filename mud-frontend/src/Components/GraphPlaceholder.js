import React, {Component} from 'react';
import {Card} from 'primereact/card';
import Arrows from './Arrows'
import Map from './Map.js'


class GraphPlaceholder extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render(){
    return (
        <div className="placeholder">
            <Card title="Okemonpay World" className="map">
                <Map />
                <Arrows goSouth={this.props.goSouth()}/>
            </Card>
        </div>
    )}
}

export default GraphPlaceholder;