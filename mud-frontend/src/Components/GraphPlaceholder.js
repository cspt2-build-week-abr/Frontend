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
                <Map currentRoom={this.props.currentRoom}/>
                <Arrows
                goNorth={this.props.goNorth}
                goSouth={this.props.goSouth}
                goEast={this.props.goEast}
                goWest={this.props.goWest}/>
            </Card>
        </div>
    )}
}

export default GraphPlaceholder;