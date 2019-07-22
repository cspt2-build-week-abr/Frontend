import React, {Component} from 'react'
import {Card} from 'primereact/card';

class PersonalInventory extends Component {
    constructor() {
        super();
        this.state = {

        };

    }

    user = () => {
        if (this.props.name) {
            return this.props.name + "\'s Inventory"
        } else {
            return 'Please Sign in'
        }
    } 

    render(){
        if (this.props.inventory.length > 0) {
        return (
            <div>
            <Card header={this.user} className="inventory">
                <span className='collected'>{this.props.inventory.length}/100 Collected!</span>
                {this.props.inventory.map((item) => {
                    return <li>{item.name}</li>
                })}
            </Card>
            </div>
        )} else {
            return (
                <div>
                 <Card header={this.user()} className="inventory">
                 <span className='collected'>{this.props.inventory.length}/100 Collected!</span>
                  <h2>Your inventory is empty</h2>
                  </Card>
                  </div>
            )
        }
    }
}

export default PersonalInventory;
