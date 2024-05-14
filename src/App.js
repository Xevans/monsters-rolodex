/* eslint-disable no-useless-constructor */
import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    
    this.state = {
      monsters: [], // list json objects (an array of objects)
      searchField: ''
    };
  }

  componentDidMount() { // check: did this component mount? // mounting occurs the first time a component gets rendered to the DOM
    console.log("componentDidMount?");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json()) // convert response to JSON
    .then((users) => this.setState(
      () => { // Apply JSON objects to the monster array under they member (created at function time) users // so monsters now has a users member with these objects
      return {monsters: users} // will render again because this changes the state.
      },
      () => {
        //console.log(this.state)
      },
    ));
  }

  // updates the searchField state
  onSearchChange = (event) => {
    console.log(event.target.value); // logs the string currently in the search box
    const searchField = event.target.value.toLocaleLowerCase(); // toLocaleLowerCase forces lowercase, use this for case-insensitivity
    
    // update the state of monsters
    this.setState( () => {
      return { searchField } // update the search field member with the current search bar text
    })

  }
  
  render() {
    console.log("render");

    const { monsters, searchField } = this.state; // allows for shorthanding so we dont have to type "this." everywhere
    const { onSearchChange } = this; // make sure to scope properly 
    
    // create a filtered array based on monster names that match the searchField
    const filteredMonsters = monsters.filter( (monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField); // check if monster name includes the current string in search box. store matches in filtered monsters
    });


    return (
      <div className="App">

        <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange}/>

        { // display monster names with the current filtered array
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
              <h1> {monster.name} </h1>
              </div>
            );
          })
        }

      </div>
    );
  }
}

export default App;
