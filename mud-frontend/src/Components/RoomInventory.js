import React, {Component} from 'react';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button'

class RoomInventory extends Component {
    constructor() {
        super();
        this.state = {};
    }


    render() {
        if (this.props.pokeballs.length === 0 && this.props.pokemon.length === 0) {
            return (<div className="roominventory"><h1>Oh no! This room is empty!</h1></div>)
        }
        else {
            let roomstuff = []
            this.props.pokemon.map(item => roomstuff.push(item))
            this.props.pokeballs.map(item => roomstuff.push(item))
            return (
                <div className='roominventory'>
                    {roomstuff.map((item) => {
                    return (
                        <Card
                        className='card'
                        key={item.name}
                        title={item.name}
                        footer={<Button label="+" className="p-button-rounded p-button-secondary" onClick={() => this.props.inventoryItem(item)}/>}
                    >{item.name}</Card>
                    )})}
            </div>)
        }
    }
}

export default RoomInventory;
