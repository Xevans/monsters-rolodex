import { Component } from 'react';

// Handles monster cards
class CardList extends Component {
    
    
    
    render() {
        const { monsters } = this.props;
        return(
            <div>
                {monsters.map(monster => ( 
                    <h1 key={monster.id}>
                        {monster.name}
                    </h1>
                ))}
                
            </div>
            
        )
    }
}

export default CardList; // Allows other files to import the code from this component class