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
                key={room} 
                title={room[1]}
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

