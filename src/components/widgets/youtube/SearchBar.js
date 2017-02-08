import React, { Component } from 'react';

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
          value={this.state.term} />
      </div>
    );
  }


}

export default SearchBar;
