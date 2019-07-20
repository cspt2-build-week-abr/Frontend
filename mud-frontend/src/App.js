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
import {ProgressSpinner} from 'primereact/progressspinner';

  export class App extends Component {
    constructor() {
        super();
        this.state = {
          rooms: room_list,
          currentRoom: 0,
          user: {},
          loading: true
        };
    }

    componentDidMount(){
      this.props.client
      .query({
        query: gql`
          {
            allAreas {
              name
              pokeballs
              pokemon
              coords
              exits
              players
            }
          }
        `
      })
      .then(result => this.setState({ rooms: result.data }))
      .then(this.setState({ loading: false }))
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
      if (this.state.rooms.allAreas !== undefined ) {
      console.log('This array', this.state.rooms['allAreas'][this.state.currentRoom]['name'])
      }

      if (this.state.rooms.allAreas !== undefined ) {
      return (
        <div className="App">

          <Header room={this.state.rooms['allAreas'][this.state.currentRoom]['name']}/>
         
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
      );} else {
        return (
          <div className="loading">
          <h1>Loading</h1>
          <ProgressSpinner />
          </div>
        )
      }
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
