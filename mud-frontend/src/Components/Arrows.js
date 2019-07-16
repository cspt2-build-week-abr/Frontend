import React from 'react'
import {Button} from 'primereact/button'


const Arrows = () => {
    return (
        <div className="directions">
            <Button label='▲' className="p-button-raised p-button-rounded p-button-primary arrow"/>
            <Button label='◀' className="p-button-raised p-button-rounded p-button-primary arrow"/>
            <Button label='▶' className="p-button-raised p-button-rounded p-button-primary arrow"/>
            <Button label='▼' className="p-button-raised p-button-rounded p-button-primary arrow"/>
        </div>
    )
}

export default Arrows;