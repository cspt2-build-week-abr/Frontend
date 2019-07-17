import React, {Component} from 'react'
import {Button} from 'primereact/button'

class Header extends Component{
    render(){
    return (
        <div className="header">
            <h1>OKEMONPAY!</h1>
            <h2>Current Room: {this.props.room}</h2>
            <Button label="Log In" className="p-button-raised p-button-rounded p-button-secondary"/>
        </div>
    )}
}

export default Header;