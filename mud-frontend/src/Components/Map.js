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
    
    // get edges for a single room 

    function getRoomEdges(room) {
        var existingExits = []
        var edges = []
        // for every defined exit in a given room, add that room number to the existingExits array
        for (var exit in room.exits) {
            if (room.exits[exit] != '') {
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

    return (
      <div>
        <XYPlot height={300} width={300}>
            {/* return lines from edges */}
            {edges.map(edge => (
                <LineSeries
                    data={edge}
                    color='red'
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
