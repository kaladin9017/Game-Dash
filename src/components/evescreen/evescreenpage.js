const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
import {Component} from 'react';

class EveScreen extends Component {
  render() {
    return (
      <div>
        <div className="evehomepage">
          <center><h1 className="placeholderinstruction">List of all Eve Online widgets...</h1></center>
            <center><hr id="mainhr"/></center>
        </div>
      </div>
    );
  }
}

export default EveScreen;
