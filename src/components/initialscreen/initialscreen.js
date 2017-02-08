var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery')

var InitialScreen = React.createClass({

  render: function() {
    return (
      <div>

        <div className="homepage">

        	<center><h1 className="placeholderinstruction">Click on a Game to show widgets...</h1></center>

          <center><hr id="mainhr"/></center>

        </div>

      </div>
    )
  }
})

export default InitialScreen;
