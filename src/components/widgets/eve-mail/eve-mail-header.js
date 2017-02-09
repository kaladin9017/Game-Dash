import React, {Component} from 'react';
import {Link} from 'react-router';

class EveMailHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <li>
          <p>subject: {this.props.header.subject}</p>
          <p>sender: {this.props.header.from}</p>
          <button onClick={this.props.handleClick}>Read</button>
        </li>
      </div>
    );
  }
}

export default EveMailHeader;
