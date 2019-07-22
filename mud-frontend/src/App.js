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
            currentLocation: [{x: 4, y: 5}],
            areaId: ''
          }
        };
    }

    signUp = (username, password) => {
      let mutation = gql`
        mutation($username: String! $password: String!) {
          createUser(
            username: $username
            password: $password
          ){
            user {
              username
              password
            }
          }
        }
      `
      this.props.client
        .mutate({mutation, variables: {username: username, password: password}}).then((result) => console.log(result))
    }

    // NEED TO FINISH BUILDING OUT FUNCTIONALITY TO QUERY DATABASE FOR LOG IN

    logIn = (username, password) => {
      this.props.client
        .query({
          query: gql`
            {
              users {
                username
                userId
                items
                areaId
              }
            }
          `
        // store the result from the log in query on state
        }).then((result) => 
          this.setState({
            areaId: 
              result.data.users[0].areaId
            }, () => console.log(this.state.areaId)
          )
        )
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

          <Header 
            room={this.state.rooms[this.state.currentRoom][1]}
            signUp={this.signUp}
            logIn={this.logIn}
          />
          <RoomInventory rooms={this.state.rooms}/>
          <div className="lower">
            <GraphPlaceholder
              goNorth={()=>this.goNorth}
              goSouth={()=>this.goSouth}
              goEast={()=>this.goEast}
              goWest={()=>this.goWest}
              currentLocation={this.state.user.currentLocation}/>
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
