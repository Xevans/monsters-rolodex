import { Component } from 'react';
import './search-box.styles.css'

// handle Search Box
class SearchBox extends Component {
    
    render() {
        return(
            <input 
                className={`search-box ${this.props.className}`} // this prop has two class names using the JS string literal (dollar sign): the hard coded, and the one passed by props. Do this so that you can apply global styling + styling for this search box instance
                type='search' 
                placeholder={this.props.placeholderSearchText} 
                onChange={this.props.onChangeHandler}/>
        )
    }
}

export default SearchBox;