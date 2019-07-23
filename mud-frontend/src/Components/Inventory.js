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

    drop = (item) => {
        var index = this.props.inventory.indexOf(item);
        if (index > -1) {
          console.log(this.props.inventory.splice(index, 1))
        }
      }

    render(){
        if (this.props.inventory.length > 0) {
        return (
            <div>
            <Card header={this.user()} className="inventory">
                <span className='collected'>{this.props.inventory.length}/100 Collected!</span>
                {this.props.inventory.map((item) => {
                    return <li>{item.name} <button className='drop' onClick={(e)=> {
                        var index = this.props.inventory.indexOf(item);
                        if (index > -1) {
                        this.props.inventory.splice(index, 1)
                        this.forceUpdate()
                    }
                    }}>Drop Item</button></li>
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
