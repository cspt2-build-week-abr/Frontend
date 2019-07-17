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



  export class App extends Component {
    constructor() {
        super();
        this.state = {
          rooms: room_list
        };
    }


    render() {
      console.log(this.state.rooms)
      return (
        <div className="App">
          <Header />
          <RoomInventory rooms={this.state.rooms}/>
          <div className="lower">
            <GraphPlaceholder />
            <PersonalInventory />
          </div>
          <Footer />
        </div>
      );
    }
}

export default App;
