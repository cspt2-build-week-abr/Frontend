import React, {Component} from 'react';
import {Button} from 'primereact/button'



class Arrows extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render(){
    return (
        <div className="directions">
<<<<<<< HEAD
            <Button label='▲' className="p-button-raised p-button-rounded p-button-primary arrow" onClick={() => this.props.goNorth} onKeyPress={() => this.props.goNorth}/>
            <Button label='◀' className="p-button-raised p-button-rounded p-button-primary arrow" onClick={() => this.props.goWest} onKeyPress={() => this.props.goWest}/>
            <Button label='▶' className="p-button-raised p-button-rounded p-button-primary arrow" onClick={() => this.props.goEast} onKeyPress={() => this.props.goEast}/>
            <Button label='▼' className="p-button-raised p-button-rounded p-button-primary arrow" onClick={() => this.props.goSouth} onKeyPress={() => this.props.goSouth}/>
=======
            <Button label='▲' className="p-button-raised p-button-rounded p-button-primary arrow" onClick={this.props.goNorth}/>
            <Button label='◀' className="p-button-raised p-button-rounded p-button-primary arrow" onClick={this.props.goWest}/>
            <Button label='▶' className="p-button-raised p-button-rounded p-button-primary arrow" onClick={this.props.goEast}/>
            <Button label='▼' className="p-button-raised p-button-rounded p-button-primary arrow" onClick={this.props.goSouth}/>
>>>>>>> 6ebab3edd7951743b12afccce0dfe35b4403c7e7
        </div>
    )}
}

export default Arrows;