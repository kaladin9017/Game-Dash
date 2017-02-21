import React, { Component } from 'react';
import CSS from './styles/youtubestyle.css'

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ""};
  }

  onInputChange(event){
    let term = event.target.value;
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render () {
    return (
      <div className="search-bar">
        <input
          onChange={this.onInputChange.bind(this)}
          value={this.state.term} 
          id="vidsearch"
          placeholder="Search a video..."
          />
      </div>
    );
  }


}

export default SearchBar;
