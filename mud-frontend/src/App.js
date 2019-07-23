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
            inventory: [],
            pokemon: [],
            pokeballs: []
          },
          loading: true,
          pokeballs: [],
          pokemon: []
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
                userId
                areaId
                items
                pokemon
            }
          }
        }
      `
      this.props.client
        .mutate({mutation, variables: {username: username, password: password}})
        .then((result) => {
            console.log(result)
            const currentRoom = this.state.rooms.allAreas.filter(room    =>  {
                return room.areaId == result.data.createUser.user.areaId
            })[0]
            console.log(result.data.createUser.user)
            console.log(result.data.createUser.user.items.concat(result.data.createUser.user.pokemon))
            this.setState({
                user: {
                    userId: result.data.createUser.user.userId,
                    username: result.data.createUser.user.username,
                    items: JSON.parse(result.data.createUser.user.items),
                    currentLocation: [currentRoom.coords],
                    inventory: JSON.parse(result.data.createUser.user.pokemon).concat(JSON.parse(result.data.createUser.user.items))
                }
            },()  =>  console.log(this.state))
        })
    }

    // NEED TO FINISH BUILDING OUT FUNCTIONALITY TO QUERY DATABASE FOR LOG IN

    logIn = (username, password) => {
        let mutation = gql`
          mutation($username: String! $password: String!) {
            login  (
              username: $username
              password: $password
            ){
              user {
                username
                userId
                areaId
                items
                pokemon
              }
            }
          }
        `
        this.props.client
          .mutate({mutation, variables: {username: username, password: password}})
          .then((result) => {
              const currentRoom = this.state.rooms.allAreas.filter(room    =>  {
                  return room.areaId == result.data.login.user.areaId
              })[0]
              console.log(result.data.login.user)
              console.log(result.data.login.user.items.concat(result.data.login.user.pokemon))
              this.setState({
                  user: {
                      userId: result.data.login.user.userId,
                      username: result.data.login.user.username,
                      items: JSON.parse(result.data.login.user.items),
                      currentLocation: [currentRoom.coords],
                      inventory: JSON.parse(result.data.login.user.pokemon).concat(JSON.parse(result.data.login.user.items))
                  }
              },()  =>  console.log(this.state))
          })
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
              areaId
              description
            }
          }
        `
      })
      .then(results => {
          console.log(results)
          const rooms = {
              allAreas: results.data.allAreas.map(room  =>  {
              room.pokeballs = JSON.parse(room.pokeballs)
              room.pokemon = JSON.parse(room.pokemon)
              room.players = JSON.parse(room.players)
              room.coords = JSON.parse(room.coords)
              room.exits = JSON.parse(room.exits)
              return room
          })}
        this.setState({ rooms: rooms, loading: false })
      })
    }

    spawn = ()  =>  {
        this.props.client
        .query({
          query: gql`
            {
              allPokeballs {
                name
                catchRate
                spawnChance
              }
            }
          `
        })
        .then(result    =>  {
            const pokeballs = result.data.allPokeballs
            this.props.client
            .query({
              query: gql`
                {
                  allPokemon {
                    name
                    catchChance
                    spawnChance
                  }
                }
              `
            })
            .then((result)  =>  {
                const pokemon = result.data.allPokemon
                let pokemonSpawnChance = pokemon.map(mon =>  {
                    return mon.spawnChance
                })
                let pokeballSpawnChance = pokeballs.map(ball =>  {
                    return ball.spawnChance
                })
                let count = this.state.pokemon.length + this.state.pokeballs.length
                console.log(count)
                let newPokemon = []
                let newPokeballs = []
                for(let i = 0; i < 5; i++)  {
                    if( count < 5)    {
                        const pokemonOrPokeball = Math.random()
                        if(pokemonOrPokeball < .5)  {
                            const pokemonNum = Math.random()
                            const filtered = pokemonSpawnChance.filter(mon  =>  {
                                return mon > pokemonNum
                            })
                            const spawnPokemon = pokemon.filter((mon)   =>  {
                                if(mon.spawnChance === filtered[filtered.length - 1])   {
                                    return mon
                                }
                            })[0]
                            newPokemon.push(spawnPokemon)
                            count+=1
                        }   else {
                            const pokeballNum = Math.random()
                            const filtered = pokeballSpawnChance.filter(mon  =>  {
                                return mon > pokeballNum
                            })
                            const spawnPokeball = pokeballs.filter((ball)   =>  {
                                if(ball.spawnChance === filtered[filtered.length - 1])   {
                                    return ball
                                }
                            })[0]
                            newPokeballs.push(spawnPokeball)
                            count+=1
                        }
                    }
                }

                newPokeballs = newPokeballs.filter(item =>  {
                    return item!== undefined
                })
                newPokemon = newPokemon.filter(item =>  {
                    return item!== undefined
                })
                this.setState({
                    pokemon: newPokemon,
                    pokeballs: newPokeballs
                })
                let mutation = gql`
                  mutation($areaId: String! $name: String! $description: String! $pokeballs: String! $pokemon: String! $coords: String! $exits: String! $players: String!) {
                    updateArea(
                      areaId: $areaId
                      name: $name
                      description: $description
                      pokeballs: $pokeballs
                      pokemon: $pokemon
                      coords: $coords
                      exits: $exits
                      players: $players
                    ){
                      area {
                          name
                          areaId
                          pokeballs
                          pokemon
                          players
                          coords
                          exits
                          description
                      }
                    }
                  }
                `
                this.props.client
                  .mutate({mutation, variables: {
                      areaId: this.state.rooms.allAreas[this.state.currentRoom].areaId,
                      name: this.state.rooms.allAreas[this.state.currentRoom].name,
                      description: "",
                      pokeballs: JSON.stringify(this.state.pokeballs),
                      pokemon: JSON.stringify(this.state.pokemon),
                      coords: JSON.stringify(this.state.rooms.allAreas[this.state.currentRoom].coords),
                      exits: JSON.stringify(this.state.rooms.allAreas[this.state.currentRoom].exits),
                      players: JSON.stringify(this.state.rooms.allAreas[this.state.currentRoom].players)
                  }
              })
                  .then((result) => {
                      // console.log(result)
                      let newRooms = this.state.rooms
                      newRooms.allAreas[this.state.currentRoom] = result.data.updateArea.area
                      this.setState({
                          rooms: newRooms,
                          pokeballs: JSON.parse(newRooms.allAreas[this.state.currentRoom].pokeballs),
                          pokemon: JSON.parse(newRooms.allAreas[this.state.currentRoom].pokemon)
                      })
                  })
            })
        })
    }

    updateAreaFunc = () =>{
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
                areaId
              }
            }
          `
        })
        .then((result)  =>  {
            const room = result.data.allAreas.filter(r    =>  {
                return r.areaId == this.state.rooms.allAreas[this.state.currentRoom].areaId
            })[0]
            let rooms = this.state.rooms

            rooms.allAreas[this.state.currentRoom] = room
            console.log(room)
            let user = this.state.user
            user.areaId = room.areaId
            this.setState({
                rooms: rooms,
                pokemon: JSON.parse(room.pokemon),
                pokeballs: JSON.parse(room.pokeballs),
                user: user
            }, console.log(this.state))
        })
    }





    goNorth = () => {
      let north = rooms[this.state.currentRoom]['exits']['n']
      console.log(north)
        if(north !== '') {
          this.setState({ currentRoom: north},this.updateAreaFunc(),this.spawn())
        } else {
          alert('There is no room in that direction')
        }
    }

      goSouth = () => {
        let south = rooms[this.state.currentRoom]['exits']['s']
        if(south !== '') {
          this.setState({ currentRoom: south},this.updateAreaFunc(),this.spawn())
        } else {
          alert('There is no room in that direction')
        }
    }

    goEast = () => {
      let east = rooms[this.state.currentRoom]['exits']['e']
        if(east !== '') {
          this.setState({ currentRoom: east},this.updateAreaFunc(),this.spawn())
          this.spawn()
        } else if (east === null) {
          alert('There is no room in that direction')
        }
  }

    goWest = () => {
      let west = rooms[this.state.currentRoom]['exits']['w']
        if(west !== '') {
          this.setState({ currentRoom: west},this.updateAreaFunc(),this.spawn())
        } else {
          alert('There is no room in that direction')
        }
    }

    addToInventory = (item) => {
      this.state.user.inventory.push(item)
      function isNotItem(value) {
        return value !== item;
      }

      this.setState({ pokemon: this.state.pokemon.filter(isNotItem)},() =>  {
          this.setState({ pokeballs: this.state.pokeballs.filter(isNotItem)},() =>  {
              let user = this.state.user
              user.items.push(item)
              this.setState({user: user},() =>  {
                  let mutation = gql`
                    mutation($userId: String! $username: String! $items: String! $areaId: String! $pokemon: String! $pokeballs: String!) {
                      updateUser(
                        userId: $userId
                        areaId: $areaId
                        username: $username
                        items: $items
                        pokeballs: $pokeballs
                        pokemon: $pokemon
                      ){
                        user {
                            userId
                            areaId
                            username
                            items
                            pokemon
                            pokeballs
                        }
                      }
                    }
                  `
                  console.log(this.state)
                  this.props.client
                    .mutate({mutation, variables: {
                        userId: this.state.user.userId,
                        areaId: this.state.user.areaId,
                        username: this.state.user.username,
                        pokeballs: "[]",
                        pokemon: "[]",
                        items: JSON.stringify(this.state.user.items)
                    }
                })
                    .then((result) => {
                        console.log(result)
                        console.log(this.state.user)
                    })
              })
          })
      })

    }


    render() {
      if (this.state.rooms.allAreas !== undefined ) {
        if (this.state.rooms.allAreas[this.state.currentRoom] !== undefined ) {
      return (
        <div className="App">


          <Header signUp={this.signUp} logIn={this.logIn} room={this.state.rooms['allAreas'][this.state.currentRoom]['name']}/>
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
            <PersonalInventory user={this.state.user} inventory={this.state.user.items} client={this.props.client} name={this.state.user.username} />
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
