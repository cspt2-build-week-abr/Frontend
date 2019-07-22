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
          user: {
            userId: '',
            username: '',
            items: [],
            currentLocation: [{x: 4, y: 5}],
            areaId: '',
            inventory: []
          },
          loading: true,
          pokeballs: [1, 2, 3],
          pokemon: [4, 5, 6]
        };
    };

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

      .then(results => {
        this.setState({ rooms: results.data })
      })
      .then(this.setState({ loading: false }))
    }

    goNorth = () => {
      let north = rooms[this.state.currentRoom]['exits']['n']
        if(north !== '') {
          this.setState({ currentRoom: north})
        } else {
          alert('There is no room in that direction')
        }
    }

      goSouth = () => {
        let south = rooms[this.state.currentRoom]['exits']['s']
        if(south !== '') {
          this.setState({ currentRoom: south})
        } else {
          alert('There is no room in that direction')
        }
    }

    goEast = () => {
      let east = rooms[this.state.currentRoom]['exits']['e']
        if(east !== '') {
          this.setState({ currentRoom: east})
        } else if (east === null) {
          alert('There is no room in that direction')
        }
  }

    goWest = () => {
      let west = rooms[this.state.currentRoom]['exits']['w']
        if(west !== '') {
          this.setState({ currentRoom: west})
        } else {
          alert('There is no room in that direction')
        }
    }

    addToInventory = (item) => {
      this.state.user.inventory.push(item)
      function isNotItem(value) {
        return value !== item;
      }
      
      this.setState({ pokemon: this.state.pokemon.filter(isNotItem)}) 
      this.setState({ pokeballs: this.state.pokeballs.filter(isNotItem)}) 
    }


    render() {
      if (this.state.rooms.allAreas !== undefined ) {
        if (this.state.rooms.allAreas[this.state.currentRoom] !== undefined ) {
      return (
        <div className="App">

          <Header room={this.state.rooms['allAreas'][this.state.currentRoom]['name']}/>
          <RoomInventory 
            pokemon={this.state.pokemon}
            pokeballs={this.state.pokeballs}
            inventoryItem = {this.addToInventory}
          />
          <div className="lower">
            <GraphPlaceholder
              goNorth={this.goNorth}
              goSouth={this.goSouth}
              goEast={this.goEast}
              goWest={this.goWest}
              currentRoom={this.state.currentRoom}
            />
            <PersonalInventory inventory={this.state.user.inventory}/>
          </div>
          <Footer />
        </div>
      )}} else {
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





// JSON.parse(this.state.rooms['allAreas'][this.state.currentRoom]['pokemon'])
// JSON.parse(this.state.rooms['allAreas'][this.state.currentRoom]['pokeballs'])