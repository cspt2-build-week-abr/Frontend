import React, {Component} from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button'

class RoomInventory extends Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {  
        // var Items = this.props.rooms.map((room) => {
        //   return (
        //     <Card 
        //         className='card'
        //         key={room} 
        //         title={room[1]}
        //         footer={<Button label="Add to Inventory" className="p-button-rounded p-button-secondary" />}
        //     >{room[1]}</Card>
        //   );
        // });
        if (this.props.pokeballs.length === 0 && this.props.pokemon.length === 0) {
            return (<div className="roominventory"><h1>Oh no! This room is empty!</h1></div>)
        } else {
            return (
                // <div className='roominventory'>
                // {this.props.rooms}
                // </div>
                <div className="roominventory">{this.props.pokemon}{this.props.pokeballs}</div>
            );
        }
    }
}

export default RoomInventory;

