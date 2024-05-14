import { Component } from 'react';

// handle Search Box
class SearchBox extends Component {
    
    render() {
        return(
            <input 
                className={this.props.className} 
                type='search' 
                placeholder={this.props.placeholderSearchText} 
                onChange={this.props.onChangeHandler}/>
        )
    }
}

export default SearchBox;