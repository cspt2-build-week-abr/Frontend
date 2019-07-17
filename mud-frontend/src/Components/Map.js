import React  from 'react';
import '../App.css';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, MarkSeries} from 'react-vis';

class Map extends React.Component {
  render() {
    // sample room data

    // const rooms = {
    //     0: {coords: {x: 0, y: 0}, exits: {n: '1', s: '', e: '', w: ''}},
    //     1: {coords: {x: 0, y: 1}, exits: {n: '2', s: '', e: '3', w: ''}},
    //     2: {coords: {x: 0, y: 2}, exits: {n: '', s: '1', e: '4', w: ''}},
    //     3: {coords: {x: 1, y: 1}, exits: {n: '4', s: '', e: '', w: '1'}},
    //     4: {coords: {x: 1, y: 2}, exits: {n: '5', s: '3', e: '6', w: '2'}},
    //     5: {coords: {x: 1, y: 3}, exits: {n: '', s: '4', e: '', w: ''}},
    //     6: {coords: {x: 2, y: 2}, exits: {n: '7', s: '8', e: '12', w: '4'}},
    //     7: {coords: {x: 2, y: 3}, exits: {n: '', s: '6', e: '', w: ''}},
    //     8: {coords: {x: 2, y: 1}, exits: {n: '6', s: '9', e: '', w: ''}},
    //     9: {coords: {x: 2, y: 0}, exits: {n: '8', s: '10', e: '', w: ''}},
    //     10: {coords: {x: 2, y: -1}, exits: {n: '9', s: '11', e: '', w: ''}},
    //     11: {coords: {x: 2, y: -2}, exits: {n: '10', s: '', e: '', w: ''}},
    //     12: {coords: {x: 3, y: 2}, exits: {n: '', s: '', e: '13', w: '6'}},
    //     13: {coords: {x: 4, y: 2}, exits: {n: '', s: '', e: '14', w: '12'}},
    //     14: {coords: {x: 5, y: 2}, exits: {n: '', s: '', e: '', w: '13'}},
    // };

    room_list = {0: {name:'Back Yard', pokeballs: "[]", pokemon: "[]" , exits: {'n':1,'s':3,'e':,'w':7}, coords:{X: 12,Y: 5}},
1: {name:'Kanto', pokeballs: "[]", pokemon: "[]" , exits:{'n':2,'s':0,'e':17,'w':68}", coords:"{X: 12,Y: 6}}",
2: {name:'Johto', pokeballs: "[]", pokemon: "[]" , exits:{'n':5,'s':1,'e':18,'w':69}", coords:"{X: 12,Y: 7}}",
3: {name:'Hoenn', pokeballs: "[]", pokemon: "[]" , exits:{'n':3,'s':4,'e':,'w':44}", coords:"{X: 12,Y: 4}}",
4: {name:'Sinnoh', pokeballs: "[]", pokemon: "[]" , exits:{'n':3,'s':6,'e':,'w':45}", coords:"{X: 12,Y: 3}}",
5: {name:'Unova', pokeballs: "[]", pokemon: "[]" , exits:{'n':77,'s':2,'e':,'w':}", coords:"{X: 12,Y: 8}}",
6: {name:'Kalos', pokeballs: "[]", pokemon: "[]" , exits:{'n':4,'s':,'e':,'w':}", coords:"{X: 12,Y: 2}}",
7: {name:'Alola', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':0,'w':46}", coords:"{X: 11,Y: 5}}",
8: {name:'Galar', pokeballs: "[]", pokemon: "[]" , exits:{'n':17,'s':,'e':,'w':}", coords:"{X: 13,Y: 5}}",
9: {name:'Pewter City', pokeballs: "[]", pokemon: "[]" , exits:{'n':20,'s':30,'e':,'w':}", coords:"{X: 14,Y: 5}}",
10: {name:'Cerulean City', pokeballs: "[]", pokemon: "[]" , exits:{'n':22,'s':32,'e':,'w':}", coords:"{X: 15,Y: 5}}",
11: {name:'Vermilion City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':12,'w':}", coords:"{X: 16,Y: 5}}",
12: {name:'Celadon City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':13,'w':11}", coords:"{X: 17,Y: 5}}",
13: {name:'Fuschia City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':14,'w':12}", coords:"{X: 18,Y: 5}}",
14: {name:'Saffron City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':15,'w':13}", coords:"{X: 19,Y: 5}}",
15: {name:'Cinnabar City', pokeballs: "[]", pokemon: "[]" , exits:{'n':27,'s':42,'e':16,'w':14}", coords:"{X: 20,Y: 5}}",
16: {name:'Viridian City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':,'w':15}", coords:"{X: 21,Y: 5}}",
17: {name:'Violet City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':8,'e':20,'w':1}", coords:"{X: 13,Y: 6}}",
18: {name:'Azalea City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':19,'w':2}", coords:"{X: 13,Y: 7}}",
19: {name:'Goldenrod City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':21,'w':18}", coords:"{X: 14,Y: 7}}",
20: {name:'Ecruteak City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':9,'e':22,'w':17}", coords:"{X: 14,Y: 6}}",
21: {name:'Olivine City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':,'w':19}", coords:"{X: 15,Y: 7}}",
22: {name:'Cianwood City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':10,'e':23,'w':20}", coords:"{X: 15,Y: 6}}",
23: {name:'Mahogany Town', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':24,'w':22}", coords:"{X: 16,Y: 6}}",
24: {name:'Blackthorn City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':25,'w':23}", coords:"{X: 17,Y: 6}}",
25: {name:'Rustboro City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':26,'w':24}", coords:"{X: 18,Y: 6}}",
26: {name:'Dewford City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':27,'w':25}", coords:"{X: 19,Y: 6}}",
27: {name:'Mauville City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':15,'e':,'w':26}", coords:"{X: 20,Y: 6}}",
28: {name:'Lavaridge City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':29,'e':,'w':}", coords:"{X: 13,Y: 4}}",
29: {name:'Petalburg City', pokeballs: "[]", pokemon: "[]" , exits:{'n':28,'s':,'e':31,'w':}", coords:"{X: 13,Y: 3}}",
30: {name:'Fortree City', pokeballs: "[]", pokemon: "[]" , exits:{'n':9,'s':31,'e':,'w':}", coords:"{X: 14,Y: 4}}",
31: {name:'Mossdeep City', pokeballs: "[]", pokemon: "[]" , exits:{'n':30,'s':,'e':33,'w':29}", coords:"{X: 14,Y: 3}}",
32: {name:'Sootopolis City', pokeballs: "[]", pokemon: "[]" , exits:{'n':10,'s':,'e':34,'w':}", coords:"{X: 15,Y: 4}}",
33: {name:'Oreburgh City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':74,'e':,'w':31}", coords:"{X: 15,Y: 3}}",
34: {name:'Eterna City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':36,'w':32}", coords:"{X: 16,Y: 4}}",
35: {name:'Veilstone City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':37,'w':}", coords:"{X: 16,Y: 3}}",
36: {name:'Pastoria City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':38,'w':34}", coords:"{X: 17,Y: 4}}",
37: {name:'Hearthome City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':39,'w':35}", coords:"{X: 17,Y: 3}}",
38: {name:'Canalave City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':40,'w':36}", coords:"{X: 18,Y: 4}}",
39: {name:'Snowpoint City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':41,'w':37}", coords:"{X: 18,Y: 3}}",
40: {name:'Sunyshore City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':41,'e':,'w':38}", coords:"{X: 19,Y: 4}}",
41: {name:'Striaton City', pokeballs: "[]", pokemon: "[]" , exits:{'n':40,'s':,'e':,'w':39}", coords:"{X: 19,Y: 3}}",
42: {name:'Aspertia City', pokeballs: "[]", pokemon: "[]" , exits:{'n':15,'s':43,'e':,'w':}", coords:"{X: 20,Y: 4}}",
43: {name:'Nacrene City', pokeballs: "[]", pokemon: "[]" , exits:{'n':42,'s':,'e':,'w':}", coords:"{X: 20,Y: 4}}",
44: {name:'Virbank City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':3,'w':54}", coords:"{X: 11,Y: 4}}",
45: {name:'Castelia City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':4,'w':}", coords:"{X: 11,Y: 3}}",
46: {name:'Nimbasa City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':7,'w':47}", coords:"{X: 10,Y: 5}}",
47: {name:'Driftveil City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':55,'e':46,'w':}", coords:"{X: 9,Y: 5}}",
48: {name:'Mistralton City', pokeballs: "[]", pokemon: "[]" , exits:{'n':65,'s':56,'e':,'w':49}", coords:"{X: 8,Y: 5}}",
49: {name:'Icirrus City', pokeballs: "[]", pokemon: "[]" , exits:{'n':64,'s':57,'e':48,'w':50}", coords:"{X: 7,Y: 5}}",
50: {name:'Opelucid City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':49,'w':51}", coords:"{X: 6,Y: 5}}",
51: {name:'Humilau City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':50,'w':52}", coords:"{X: 5,Y: 5}}",
52: {name:'Santalune City', pokeballs: "[]", pokemon: "[]" , exits:{'n':61,'s':60,'e':51,'w':53}", coords:"{X: 4,Y: 5}}",
53: {name:'Cyllage City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':52,'w':85}", coords:"{X: 3,Y: 5}}",
54: {name:'Shalour City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':44,'w':55}", coords:"{X: 10,Y: 4}}",
55: {name:'Coumarine City', pokeballs: "[]", pokemon: "[]" , exits:{'n':47,'s':,'e':54,'w':}", coords:"{X: 9,Y: 4}}",
56: {name:'Lumiose City', pokeballs: "[]", pokemon: "[]" , exits:{'n':48,'s':,'e':,'w':}", coords:"{X: 8,Y: 4}}",
57: {name:'Laverre City', pokeballs: "[]", pokemon: "[]" , exits:{'n':49,'s':,'e':,'w':58}", coords:"{X: 7,Y: 4}}",
58: {name:'Anistar City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':57,'w':59}", coords:"{X: 6,Y: 4}}",
59: {name:'Snowbelle City', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':58,'w':60}", coords:"{X: 5,Y: 4}}",
60: {name:'Viridian Forest', pokeballs: "[]", pokemon: "[]" , exits:{'n':52,'s':,'e':59,'w':}", coords:"{X: 4,Y: 4}}",
61: {name:'Mt. Moon', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':52,'e':62,'w':}", coords:"{X: 4,Y: 6}}",
62: {name:'Cerulean Cave', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':63,'w':61}", coords:"{X: 5,Y: 6}}",
63: {name:'Rock Tunnel', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':64,'w':62}", coords:"{X: 6,Y: 6}}",
64: {name:'Diglett's Cave', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':49,'e':,'w':63}", coords:"{X: 7,Y: 6}}",
65: {name:'Safari Zone', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':48,'e':66,'w':}", coords:"{X: 8,Y: 6}}",
66: {name:'Seafoam Islands', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':67,'w':65}", coords:"{X: 9,Y: 6}}",
67: {name:'Power Plant', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':68,'w':66}", coords:"{X: 10,Y: 6}}",
68: {name:'Victory Road', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':1,'w':67}", coords:"{X: 11,Y: 6}}",
69: {name:'Indigo Plateau', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':2,'w':70}", coords:"{X: 11,Y: 7}}",
70: {name:'Ruins of Alph', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':69,'w':71}", coords:"{X: 10,Y: 7}}",
71: {name:'Slowpoke Well', pokeballs: "[]", pokemon: "[]" , exits:{'n':72,'s':,'e':70,'w':}", coords:"{X: 9,Y: 7}}",
72: {name:'Union Cave', pokeballs: "[]", pokemon: "[]" , exits:{'n':73,'s':71,'e':,'w':}", coords:"{X: 9,Y: 8}}",
73: {name:'Ilex Forest', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':72,'e':,'w':92}", coords:"{X: 9,Y: 9}}",
74: {name:'Radio Tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':33,'s':75,'e':,'w':}", coords:"{X: 15,Y: 2}}",
75: {name:'National Park', pokeballs: "[]", pokemon: "[]" , exits:{'n':74,'s':76,'e':,'w':}", coords:"{X: 15,Y: 1}}",
76: {name:'Tin Tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':75,'s':,'e':,'w':}", coords:"{X: 15,Y: 0}}",
77: {name:'Bell Tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':78,'s':5,'e':,'w':}", coords:"{X: 12,Y: 9}}",
78: {name:'Burned Tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':77,'e':79,'w':}", coords:"{X: 12,Y: 10}}",
79: {name:'Sprout Tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':80,'w':78}", coords:"{X: 13,Y: 10}}",
80: {name:'Whilr tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':81,'e':83,'w':79}", coords:"{X: 14,Y: 10}}",
81: {name:'Dark Cave', pokeballs: "[]", pokemon: "[]" , exits:{'n':80,'s':82,'e':,'w':}", coords:"{X: 14,Y: 9}}",
82: {name:'Mt.Mortar', pokeballs: "[]", pokemon: "[]" , exits:{'n':81,'s':,'e':,'w':}", coords:"{X: 14,Y: 8}}",
83: {name:'Lake of Rage', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':84,'w':80}", coords:"{X: 15,Y: 10}}",
84: {name:'Dragon\'s Den', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':,'w':83}", coords:"{X: 16,Y: 10}}",
85: {name:'Tohjo Falls', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':53,'w':86}", coords:"{X: 2,Y: 5}}",
86: {name:'Indigo Plateau', pokeballs: "[]", pokemon: "[]" , exits:{'n':87,'s':,'e':85,'w':}", coords:"{X: 1,Y: 5}}",
87: {name:'Battle Frontier', pokeballs: "[]", pokemon: "[]" , exits:{'n':88,'s':86,'e':,'w':}", coords:"{X: 1,Y: 6}}",
88: {name:'Mt. Silver', pokeballs: "[]", pokemon: "[]" , exits:{'n':89,'s':87,'e':91,'w':90}", coords:"{X: 1,Y: 7}}",
89: {name:'Sinjoh Ruins', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':88,'e':,'w':}", coords:"{X: 1,Y: 8}}",
90: {name:'Petalburg Woods', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':88,'w':}", coords:"{X: 0,Y: 7}}",
91: {name:'Devon Corporation', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':,'w':88}", coords:"{X: 2,Y: 7}}",
92: {name:'Rusturf Tunnel', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':73,'w':93}", coords:"{X: 8,Y: 9}}",
93: {name:'Granite Cave', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':92,'w':94}", coords:"{X: 7,Y: 9}}",
94: {name:'Meteor Falls', pokeballs: "[]", pokemon: "[]" , exits:{'n':95,'s':97,'e':93,'w':96}", coords:"{X: 6,Y: 9}}",
95: {name:'Mt. Pyre', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':94,'e':,'w':}", coords:"{X: 6,Y: 10}}",
96: {name:'Cave of Origin', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':,'e':94,'w':98}", coords:"{X: 5,Y: 9}}",
97: {name:'Hoenn Victory Road', pokeballs: "[]", pokemon: "[]" , exits:{'n':94,'s':,'e':,'w':}", coords:"{X: 6,Y: 8}}",
98: {name:'Sky Pillar', pokeballs: "[]", pokemon: "[]" , exits:{'n':100,'s':99,'e':96,'w':}", coords:"{X: 4,Y: 9}}",
99: {name:'Battle Tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':98,'s':,'e':,'w':}", coords:"{X: 4,Y: 8}}",
100: {name:'Southern Island', pokeballs: "[]", pokemon: "[]" , exits:{'n':,'s':98,'e':,'w':}", coords:"{X: 4,Y: 10}}"}

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
