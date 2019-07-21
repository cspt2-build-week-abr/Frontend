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
import rooms from './Data/rooms'
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



    

    goNorth = () => {
      let north = rooms[this.state.currentRoom]['exits']['n']
        if(north) {
          this.setState({ currentRoom: north})
        } else {
          alert('There is no room in that direction')
        }
    }

      goSouth = () => {
        let south = rooms[this.state.currentRoom]['exits']['s']
        if(south) {
          this.setState({ currentRoom: south})
        } else {
          alert('There is no room in that direction')
        }
    }

    goEast = () => {
      let east = rooms[this.state.currentRoom]['exits']['e']
        if(east) {
          this.setState({ currentRoom: east})
        } else {
          alert('There is no room in that direction')
        }
  }

    goWest = () => {
      let west = rooms[this.state.currentRoom]['exits']['w']
        if(west) {
          this.setState({ currentRoom: west})
        } else {
          alert('There is no room in that direction')
        }
    }

    render() {
      return (
        <div className="App">

          <Header room={this.state.rooms['allAreas'][this.state.currentRoom]['name']}/>
         
          <div className="lower">
            <GraphPlaceholder
              goNorth={this.goNorth}
              goSouth={this.goSouth}
              goEast={this.goEast}
              goWest={this.goWest}/>
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
