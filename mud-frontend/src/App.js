import React, {Component} from 'react';
import './App.css';
import "primereact/resources/themes/nova-dark/theme.css";
import "primereact/resources/primereact.min.css";
import Header from './Components/Header';
import RoomInventory from './Components/RoomInventory'
import GraphPlaceholder from './Components/GraphPlaceholder'
import PersonalInventory from './Components/Inventory'
import Footer from './Components/Footer'


const url = "http://lambda-mud-test.herokuapp.com/api/adv/rooms";
const opts = {
  method: "GET",
};


  export class App extends Component {
    constructor() {
        super();
        this.state = {rooms: [{id: 1}, {id: 2}, {id: 3}],};
    }

    componentDidMount(){
    fetch(url, opts)
    .then(res => res.json())
    .then(data => this.setState({rooms: data.rooms}))
    .catch(console.error);
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
