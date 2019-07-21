import React, {Component} from 'react'
import {Card} from 'primereact/card';

class PersonalInventory extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render(){
        if (this.props.inventory.length > 0) {
        return (
            <div>
            <Card header="Personal Inventory" className="inventory">
                <span className='collected'>{this.props.inventory.length}/100 Collected!</span>
                {this.props.inventory.map((item) => {
                    return <li>{item}</li>
                })}
            </Card>
            </div>
        )} else {
            return (
                <div>
                 <Card header="Personal Inventory" className="inventory">
                 <span className='collected'>{this.props.inventory.length}/100 Collected!</span>
                  <h2>Your inventory is empty</h2>
                  </Card>
                  </div>
            )
        }
    }
}

export default PersonalInventory;