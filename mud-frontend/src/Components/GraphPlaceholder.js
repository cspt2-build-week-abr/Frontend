import React from 'react'
import {Card} from 'primereact/card';
import Arrows from './Arrows'

const GraphPlaceholder = () => {
    return (
        <div className="placeholder">
            <Card title="Graph" className="placeholder">
                <h2>Graph Goes Here </h2>
                <Arrows />
            </Card>
        </div>
    )
}

export default GraphPlaceholder;