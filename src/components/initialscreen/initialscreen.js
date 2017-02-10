const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery')
import {Component} from 'react';

class InitialScreen extends Component {

  render() {
    return (
      <div>

        <div className="homepage">

        	<center><h1 id="mainheading" className="placeholderinstruction">Click on a Game to show widgets...</h1></center>

          <center><hr id="mainhr"/></center>

        </div>

      </div>
    )
  }
}

export default InitialScreen;
