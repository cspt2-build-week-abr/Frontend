import React, {Component} from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button'

class RoomInventory extends Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {  
        var Items = this.props.rooms.map((room) => {
          return (
            <Card 
                className='card'
                key={room} 
                title={room[1]}
                footer={<Button label="Add to Inventory" className="p-button-rounded p-button-secondary" />}
            >{room[1]}</Card>
          );
        });
        
            return (
                // <div className='roominventory'>
                // {this.props.rooms}
                // </div>
                <div className="roominventory">{Items}</div>
            );
        }
}

export default RoomInventory;

