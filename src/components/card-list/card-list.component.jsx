import { Component } from 'react';
import "./card-list.styles.css";

// Handles monster cards
class CardList extends Component {
    
    
    
    render() {
        const { monsters } = this.props; // scopeed to this.props to tell react we want to shorthand 'monsters'. can add more props if needed in the braces.
        return(

            // for each monster in monsters, render a div with 
            // an image with the alt literal 'monster' and a passed value via string interpolation 'monster.name'
            // an h2 with the current monster's name member
            // a paragraph tag with the current monster's email member
            <div className='card-list'>
                {monsters.map((monster) => {
                    const { name, email, id} = monster; //dhorthanding  some members contained in monsters
                    return(
                    <div className='card-container' key={id}>
                        <img alt={`monster ${name}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}  />
                        <h2>{name}</h2>
                        <p>{email}</p>

                    </div>
                )})}
                
                
            </div>
            
        )
    }
}

export default CardList; // Allows other files to import the code from this component class