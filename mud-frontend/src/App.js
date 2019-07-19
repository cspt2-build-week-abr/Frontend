import React, {Component} from 'react';
import './App.css';
import "primereact/resources/themes/nova-dark/theme.css";
import "primereact/resources/primereact.min.css";
import Header from './Components/Header';
import RoomInventory from './Components/RoomInventory'
import GraphPlaceholder from './Components/GraphPlaceholder'
import PersonalInventory from './Components/Inventory'
import Map from './Components/Map.js'
import Footer from './Components/Footer'
import room_list from './Components/dummydata'
import { gql } from "apollo-boost";
import { Query } from "react-apollo"

  export class App extends Component {
    constructor() {
        super();
        this.state = {
          rooms: room_list,
          currentRoom: 0
        };
    }


    goNorth = (e) => {
        let room = this.state.currentRoom
        let north = this.state.rooms[room][2][0]
        if (e.keyCode == 38) {
          if(north) {
            this.setState({ currentRoom: this.state.rooms[room][2][0]})
            alert('Going north')
          } else {
            alert('There is no room in that direction')
          }
        } 
    }

      goSouth = (e) => {
        let room = this.state.currentRoom
        let south = this.state.rooms[room][2][0]
        if (e.keyCode == 38) {
          if(south) {
            this.setState({ currentRoom: this.state.rooms[room][2][0]})
            alert('Going south')
          } else {
            alert('There is no room in that direction')
          }
        } 
    }

    goEast = (e) => {
      let room = this.state.currentRoom
      let east = this.state.rooms[room][2][0]
      if (e.keyCode == 38) {
        if(east) {
          this.setState({ currentRoom: this.state.rooms[room][2][0]})
          alert('Going east')
        } else {
          alert('There is no room in that direction')
        }
      } 
  }

    goWest = (e) => {
        let room = this.state.currentRoom
        let west = this.state.rooms[room][2][0]
        if (e.keyCode == 38) {
          if(west) {
            this.setState({ currentRoom: this.state.rooms[room][2][0]})
            alert('Going west')
          } else {
            alert('There is no room in that direction')
          }
        } 
    }


    render() {
      console.log(this.state.rooms)

      return (
        <div className="App">

          <Header room={this.state.rooms[this.state.currentRoom][1]}/>
          <RoomInventory rooms={this.state.rooms}/>
          <div className="lower">
            <GraphPlaceholder
              goNorth={()=>this.goNorth}
              goSouth={()=>this.goSouth}
              goEast={()=>this.goEast}
              goWest={()=>this.goWest}/>
            <PersonalInventory />
          </div>
          <Footer />
        </div>
      );
    }
}

export default App;
// <Query
//     query={gql`
//         {
//             allAreas {
//                 name
//             }
//         }
//         `}
//         >
// </Query>
