import "./card.styles.css"

const Card = (props) => {
    
    return (
        <div className='card-container' key={props.monster.id}>
            <img alt={`monster ${props.monster.name}`} src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}  />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
    
} 

/*class Card extends Component {
    render() {
        return (
            <div className='card-container' key={this.props.monster.id}>
                <img alt={`monster ${this.props.monster.name}`} src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}  />
                <h2>{this.props.monster.name}</h2>
                <p>{this.props.monster.email}</p>
            </div>
        )
    }
}*/

export default Card