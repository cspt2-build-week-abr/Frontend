import React, {Component} from 'react'
import {Button} from 'primereact/button'
import {OverlayPanel} from 'primereact/overlaypanel';
import {InputText} from 'primereact/inputtext';


class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            signUpUsername: '',
            signUpPassword: '',
            logInUsername: '',
            logInPassword: ''
        }
    };

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){

    return (
        <div className="header">
            <h1>OKEMONPAY!</h1>
            <h1>{this.props.room}</h1>
            <div className='headbuttongroup'>
                <Button label="Sign Up" className="p-button-raised p-button-rounded p-button-secondary headbutton" onClick={(e) => this.op1.toggle(e)}/>
                <Button label="Log In" className="p-button-raised p-button-rounded p-button-secondary headbutton" onClick={(e) => this.op2.toggle(e)}/>
            </div>
            <OverlayPanel ref={(el) => this.op1 = el}>
                <div className='auth'>
                <InputText 
                    placeholder="Username"
                    name='signUpUsername'
                    value={this.state.signUpUsername}
                    onChange={this.onChangeHandler}
                />
                <InputText 
                    placeholder="Password"
                    name='signUpPassword'
                    value={this.state.signUpPassword}
                    onChange={this.onChangeHandler}
                    type='password'
                />
                <Button 
                    label="Submit" className="p-button-rounded p-button-success" 
                    onClick={() => this.props.signUp(this.state.signUpUsername, this.state.signUpPassword)}
                />
                </div>
            </OverlayPanel>
            <OverlayPanel ref={(el) => this.op2 = el}>
            <div className='auth'>
                <InputText 
                    placeholder="Username" 
                    name='logInUsername'
                    value={this.state.logInUsername}
                    onChange={this.onChangeHandler}
                />
                <InputText 
                    placeholder="Password"
                    name='logInPassword' 
                    value={this.state.logInPassword}
                    onChange={this.onChangeHandler}
                    type='password'
                />
                 <Button 
                    label="Submit" className="p-button-rounded p-button-success" 
                    onClick={() => this.props.logIn(this.state.logInUsername, this.state.logInPassword)}
                />
                </div>
            </OverlayPanel>
        </div>
    )}
}

export default Header;