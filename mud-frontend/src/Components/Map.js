import React  from 'react';
import '../App.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, MarkSeries} from 'react-vis';
import rooms from '../Data/rooms.js'


class Map extends React.Component {
  render() {

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
        <XYPlot height={425} width={675}>
            {/* return lines from edges */}
            {edges.map(edge => (
                <LineSeries
                    data={edge}
                    color='#96B146'
                    key={Math.random()}
                />
            ))}
            {/* return dots from coordinates */}
            <MarkSeries
                data={coords}
                color='#6146B1'
            />
        </XYPlot>
      </div>
    );
  }
}

export default Map;
