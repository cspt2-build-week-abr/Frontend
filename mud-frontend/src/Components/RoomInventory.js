import React, {Component} from 'react';
import {Card} from 'primereact/card';    

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
                key={room.id} 
                title={room.id}
            >{room.id}</Card>
          );
        });
        
            return (
                <div className="roominventory">{Items}</div>
            );
        }
}

export default RoomInventory;

