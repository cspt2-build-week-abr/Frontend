import React, {Component} from 'react';
import './App.css';
import "primereact/resources/themes/nova-dark/theme.css";
import "primereact/resources/primereact.min.css";
import Header from './Components/Header';
import RoomInventory from './Components/RoomInventory'
import GraphPlaceholder from './Components/GraphPlaceholder'
import PersonalInventory from './Components/Inventory'
import Footer from './Components/Footer'
import room_list from './Components/dummydata'
import { gql } from "apollo-boost";

  export class App extends Component {
    constructor() {
        super();
        this.state = {
          rooms: room_list,
          currentRoom: 0,
          user: {
            userId: '',
            username: '',
            items: [],
            currentLocation: ''
          }
        };
    }

    

    goNorth = () => {
        let room = this.state.currentRoom
        let north = this.state.rooms[room][2][0]
        // if (south !== undefined) {
        //   this.setState({ currentRoom: south })
        // } else {
          alert('North')
        // }
    }

      goSouth = () => {
        let room = this.state.currentRoom
        let south = this.state.rooms[room][2][1]
        // if (south !== undefined) {
        //   this.setState({ currentRoom: south })
        // } else {
          alert('South')
        // }
    }

    goEast = () => {
      let room = this.state.currentRoom
      let east = this.state.rooms[room][2][2]
      // if (south !== undefined) {
      //   this.setState({ currentRoom: south })
      // } else {
        alert('East')
      // }
  }

    goWest = () => {
      let room = this.state.currentRoom
      let west = this.state.rooms[room][2][3]
      // if (south !== undefined) {
      //   this.setState({ currentRoom: south })
      // } else {
        alert('West')
      // }
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
