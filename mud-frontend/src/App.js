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



  export class App extends Component {
    constructor() {
        super();
        this.state = {
          rooms: room_list,
          currentRoom: 0
        };
    }


    goSouth = () => {
        let room = this.state.currentRoom
        let south = this.state.rooms[room][2][1]
        if (south !== undefined) {
          this.setState({ currentRoom: south })
        } else {
          alert('No room in that direction')
        }
    }


    render() {
      console.log(this.state.rooms)
      return (
        <div className="App">
          <Header room={this.state.rooms[this.state.currentRoom][1]}/>
          <RoomInventory rooms={this.state.rooms}/>
          <div className="lower">
            <GraphPlaceholder goSouth={()=>this.goSouth}/>
            <PersonalInventory />
          </div>
          <Footer />
        </div>
      );
    }
}

export default App;
