/* eslint-disable no-useless-constructor */
import { useState, useEffect } from 'react'

import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';


const App = () => {
  console.log('render ')
  const [searchField, setSearchField] = useState(''); // [value, setValue] // useState(defaultState) // see notes for more details.
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [stringField, setStringField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json()) // convert response to JSON (then can also be understood as a 'with' statement. And like evervy javascript function, the () accept an argument. in this case we assign the fetch response to 'response')
    .then((users) => setMonsters(users));
  }, []); // ONLY whenever any values in this array change OR when the component is mounted, the code block will run // we leave it empty so it will only run when mounted (only time we fetch)

  useEffect(() => {
    // create a filtered array based on monster names that match the searchField, (notice this will occur every render).
    const newFilteredMonsters = monsters.filter( (monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField); // check if monster name includes the current string in search box. store matches in filtered monsters
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]); // do the filter monsters routine wheverer the state of monsters changes or searchField changes


  const onSearchChange = (event) => {
    //console.log(event.target.value); // logs the string currently in the search box
    const searchFieldString = event.target.value.toLocaleLowerCase(); // toLocaleLowerCase forces lowercase, use this for case-insensitivity
    setSearchField(searchFieldString);
  }


  return(
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholderSearchText={"Search Monster..."} className={'monsters-search-box'} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

/*class App extends Component {
  constructor() {
    //console.log("constructor");
    super();
    
    this.state = {
      monsters: [], // list json objects (an array of objects)
      searchField: ''
    };
  }

  componentDidMount() { // check: did this component mount? // mounting occurs the first time a component gets rendered to the DOM
    //console.log("componentDidMount?");
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
    //console.log(event.target.value); // logs the string currently in the search box
    const searchField = event.target.value.toLocaleLowerCase(); // toLocaleLowerCase forces lowercase, use this for case-insensitivity
    // update the state of monsters
    this.setState( () => {
      return { searchField } // update the search field member with the current search bar text
    })
  }
  
  render() {
    //console.log("render");

    const { monsters, searchField } = this.state; // allows for shorthanding so we dont have to type "this." everywhere
    const { onSearchChange } = this; // make sure to scope properly 
    
    // create a filtered array based on monster names that match the searchField, (notice this will occur every render).
    const filteredMonsters = monsters.filter( (monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField); // check if monster name includes the current string in search box. store matches in filtered monsters
    });


    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholderSearchText={"Search Monster..."} className={'monsters-search-box'} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}*/

export default App;
