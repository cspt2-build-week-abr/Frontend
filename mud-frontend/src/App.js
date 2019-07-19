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
          user: {}
        };
    }

    componentWillMount(){
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
      .then(result => this.setState({ rooms: result.data }));
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
      if (this.state.rooms.allAreas !== undefined ) {
      console.log('This array', this.state.rooms['allAreas'][0]['exits'].split(':'))
      }

      return (
        <div className="App">

          <Header />
         
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
