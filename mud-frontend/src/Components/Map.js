import React  from 'react';
import '../App.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, MarkSeries} from 'react-vis';

class Map extends React.Component {
  render() {
    // sample room data
    const rooms = {
        0: {coords: {x: 0, y: 0}, exits: {n: '1', s: '', e: '', w: ''}},
        1: {coords: {x: 0, y: 1}, exits: {n: '2', s: '', e: '3', w: ''}},
        2: {coords: {x: 0, y: 2}, exits: {n: '', s: '1', e: '4', w: ''}},
        3: {coords: {x: 1, y: 1}, exits: {n: '4', s: '', e: '', w: '1'}},
        4: {coords: {x: 1, y: 2}, exits: {n: '5', s: '3', e: '6', w: '2'}},
        5: {coords: {x: 1, y: 3}, exits: {n: '', s: '4', e: '', w: ''}},
        6: {coords: {x: 2, y: 2}, exits: {n: '7', s: '', e: '', w: '4'}},
        7: {coords: {x: 2, y: 3}, exits: {n: '', s: '6', e: '', w: ''}},
    };

    // get coordinates from sample room data

    var coords = []

    for (var room in rooms) {
        coords.push(rooms[room].coords)
    }
    
    // get edges from sample room data

    function checkExistingExits(room) {
        var existingExits = []
        for (var exit in room.exits) {
            if (room.exits[exit] != '') {
                existingExits += room.exits[exit]
            }
        }
        console.log(existingExits)
    }
    
    console.log(checkExistingExits({id: 0, coords: {x: 0, y: 0}, exits: {n: '1', s: '', e: '', w: ''}}))

    // const edges  = rooms.map(room =>
    // )

    return (
      <div>
        <XYPlot height={300} width={300}>
            {/* {edges.map(edge => (
                <LineSeries
                    // data={edge}
                />
            ))} */}
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
