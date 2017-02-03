import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchTwitchVideos } from '../../../actions/index';

class SearchTwitch extends Component {
  constructor(props) {
    super(props);
    this.state = { input: ''};
  }
  handleSearch() {
    this.props.fetchTwitchVideos(this.state.input);
  }
  handleChange(event) {
    let term = event.target.value.split(' ').join('+');
    this.setState({input: term});
  }
  render() {
    return(
      <div>
        <input type="text" value={this.state.input} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleSearch.bind(this)}>Search</button>
      </div>
    );

  }
}

export default connect(null, {fetchTwitchVideos})(SearchTwitch);
