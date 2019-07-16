import React, {Component} from 'react';
import {Card} from 'primereact/card';

class RoomInventory extends Component {
    constructor() {
        super();
        this.state = {};
    }


    render() {
        const elements = [this.props.rooms];
      
        const items = []
      
        for (const [index] of elements.entries()) {
          items.push(<Card title={index.id} key={index.id}>{index.id}</Card>)
        }
      
        return (
          <div className="roominventory">
            <Card title='1' className='card'>1</Card>
            <Card title='2' className='card'>2</Card>
            <Card title='3' className='card'>3</Card>
            <Card title='4' className='card'>4</Card>
          </div>
        )
      }
}

export default RoomInventory;

