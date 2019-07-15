import React  from 'react';
import '../App.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, MarkSeries} from 'react-vis';

class Map extends React.Component {
  render() {
    // sample room data
    const rooms = [
        {id: 0, coords: {x: 0, y: 0}, exits: {n: '', s: '', e: '', w: ''}},
        {id: 1, coords: {x: 0, y: 1}, exits: {n: '', s: '', e: '', w: ''}},
        {id: 2, coords: {x: 0, y: 2}, exits: {n: '', s: '', e: '', w: ''}},
        {id: 3, coords: {x: 1, y: 1}, exits: {n: '', s: '', e: '', w: ''}},
        {id: 4, coords: {x: 1, y: 2}, exits: {n: '', s: '', e: '', w: ''}},
        {id: 5, coords: {x: 1, y: 3}, exits: {n: '', s: '', e: '', w: ''}},
        {id: 6, coords: {x: 2, y: 2}, exits: {n: '', s: '', e: '', w: ''}},
        {id: 7, coords: {x: 2, y: 3}, exits: {n: '', s: '', e: '', w: ''}}
    ];

    const edges = [
        [{x: 0, y: 0},
        {x: 0, y: 1}]
    ];

    // get coordinates from sample room data

    const coords = rooms.map(room => room.coords)
    
    console.log(coords)

    return (
      <div>
        <XYPlot height={300} width={300}>
            {edges.map(edge => (
                <LineSeries
                    // data={edge}
                />
            ))}
            {/* return dots from coordinates */}
            <MarkSeries
                data={coords}
            />
        </XYPlot>
      </div>
    );
  }
}

export default Map;
