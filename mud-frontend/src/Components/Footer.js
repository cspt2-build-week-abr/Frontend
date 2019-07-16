import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

import Abi from '../img/abi.jpeg'
import Brandon from '../img/brandon.jpeg'
import Bruce from '../img/bruce.jpeg'
import Joseph from '../img/joseph.jpeg'
import Ryan from '../img/ryan.jpeg'

export class Footer extends Component {
        
    constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    render() {
        const footer = (
            <div>
                <Button label="Close" onClick={this.onHide} />
            </div>
        );

        return (
            <div>
                <div className="footer">
                    <Button label="Dev Team" onClick={this.onClick} className="p-button-raised p-button-rounded p-button-secondary"/>
                </div>
                <div className="content-section implementation">
                    <Dialog header="Okemonpay Dev Team" visible={this.state.visible} style={{width: '50vw'}} footer={footer} onHide={this.onHide}>
                            <div className='pics'>
                                <div><a href='http://github.com/AbiFranklin' target="_blank" rel="noopener noreferrer"><img src={Abi} alt="Dev Pic"/><p>Abi Franklin</p></a></div>
                                <div><a href='http://github.com/BrandonMoll' target="_blank" rel="noopener noreferrer"><img src={Brandon} alt="Dev Pic"/><p>Brandon Moll</p></a></div>
                                <div><a href='http://github.com/bcabanayan' target="_blank" rel="noopener noreferrer"><img src={Bruce} alt="Dev Pic"/><p>Bruce Cabanayan</p></a></div>
                                <div><a href='http://github.com/josepheastman' target="_blank" rel="noopener noreferrer"><img src={Joseph} alt="Dev Pic"/><p>Joseph Eastman</p></a></div>
                                <div><a href='http://github.com/Ryntak94' target="_blank" rel="noopener noreferrer"><img src={Ryan}alt="Dev Pic" /><p>Ryan Matthews</p></a></div>
                        </div>
                    </Dialog>
                </div>
            </div>
        )
    }
}

export default Footer;