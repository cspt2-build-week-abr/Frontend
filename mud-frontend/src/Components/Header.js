import React, {Component} from 'react'
import {Button} from 'primereact/button'
import {OverlayPanel} from 'primereact/overlaypanel';
import {InputText} from 'primereact/inputtext';

class Header extends Component{
    render(){
    return (
        <div className="header">
            <h1>OKEMONPAY!</h1>
            <h2>Current Room: {this.props.room}</h2>
            <div className='headbuttongroup'>
                <Button label="Sign Up" className="p-button-raised p-button-rounded p-button-secondary headbutton" onClick={(e) => this.op1.toggle(e)}/>
                <Button label="Log In" className="p-button-raised p-button-rounded p-button-secondary headbutton" onClick={(e) => this.op2.toggle(e)}/>
            </div>
            <OverlayPanel ref={(el) => this.op1 = el}>
                <div className='auth'>
                 <InputText placeholder="Username" />
                 <InputText placeholder="Password" />
                 <Button label="Submit" className="p-button-rounded p-button-success" />
                </div>
            </OverlayPanel>
            <OverlayPanel ref={(el) => this.op2 = el}>
            <div className='auth'>
                 <InputText placeholder="Username" />
                 <InputText placeholder="Password" />
                 <Button label="Submit" className="p-button-rounded p-button-success" />
                </div>
            </OverlayPanel>
        </div>
    )}
}

export default Header;