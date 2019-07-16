import React from 'react'
import {Card} from 'primereact/card';
import Arrows from './Arrows'
import Map from './Map.js'


const GraphPlaceholder = () => {
    return (
        <div className="placeholder">
            <Card title="Graph" className="placeholder">
                {/* <h2>Graph Goes Here </h2> */}
                <Map />
                <Arrows />
            </Card>
        </div>
    )
}

export default GraphPlaceholder;