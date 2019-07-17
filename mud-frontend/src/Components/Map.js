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
        6: {coords: {x: 2, y: 2}, exits: {n: '7', s: '8', e: '12', w: '4'}},
        7: {coords: {x: 2, y: 3}, exits: {n: '', s: '6', e: '', w: ''}},
        8: {coords: {x: 2, y: 1}, exits: {n: '6', s: '9', e: '', w: ''}},
        9: {coords: {x: 2, y: 0}, exits: {n: '8', s: '10', e: '', w: ''}},
        10: {coords: {x: 2, y: -1}, exits: {n: '9', s: '11', e: '', w: ''}},
        11: {coords: {x: 2, y: -2}, exits: {n: '10', s: '', e: '', w: ''}},
        12: {coords: {x: 3, y: 2}, exits: {n: '', s: '', e: '13', w: '6'}},
        13: {coords: {x: 4, y: 2}, exits: {n: '', s: '', e: '14', w: '12'}},
        14: {coords: {x: 5, y: 2}, exits: {n: '', s: '', e: '', w: '13'}},
    };

    // get coordinates from sample room data

    var coords = []

    for (var room in rooms) {
        coords.push(rooms[room].coords)
    }
    
    // get edges for a single room 

    function getRoomEdges(room) {
        var existingExits = []
        var edges = []
        // for every defined exit in a given room, add that room number to the existingExits array
        for (var exit in room.exits) {
            if (room.exits[exit] !== '') {
                existingExits.push(room.exits[exit])
            }
        }
        // for every exit in the room, create an array with the selected room's coords at index 0 and then the exit's coords
        existingExits.forEach(exit => {
            edges.push([room.coords, rooms[exit].coords])
        })
        return edges
    }

    // get edges for all rooms

    function getAllEdges(allRooms) {
        var allEdges = []
        // for every room, merge into the resulting array all of the edges for each room
        for (var room in allRooms) {
            var roomEdges = getRoomEdges(allRooms[room])
            allEdges = allEdges.concat(roomEdges)
        }
        return allEdges
    }

    var edges = getAllEdges(rooms)
    console.log(edges)

    return (
      <div>
        <XYPlot height={300} width={300}>
            {/* return lines from edges */}
            {edges.map(edge => (
                <LineSeries
                    data={edge}
                    color='red'
                    key={Math.random()}
                />
            ))}
            {/* return dots from coordinates */}
            <MarkSeries
                data={coords}
                color='blue'
            />
        </XYPlot>
      </div>
    );
  }
}

export default Map;
