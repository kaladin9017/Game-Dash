import React from 'react';
import $ from 'jquery';
import {Link, browserHistory} from 'react-router';

const GiantBomb = React.createClass({
  getInitialState(){
    return {
      game: ''
    };
  },

  handleChange(event){
    var text = event.target.value
    this.setState({game: text})
    console.log(this.state.game);
  },

  submitGame(event){
    event.preventDefault()

    var key = "3ccef9878996b4bc77dc8b1d751b63fffbc7f2de"
   
    $.ajax ({
      dataType: 'jsonp',
      crossDomain: true,
      jsonp: 'json_callback',
      // url: ''
      url: 'http://www.giantbomb.com/api/search/?format=jsonp&api_key=' + key + '&query=' + this.state.game + '&resources=character'
      }).done(function(data) {
          console.log("success:", data);
      }).fail(function() {
        console.log("error");
      }).always(function() {
        console.log("complete");
    });

  },
  
  render(){
    if(this.state){

      return (
        <div>
         
          <form onSubmit = {this.submitGame}>
            <input onChange = {this.handleChange}type = "text" placeholder = 'giant'/>
            <input type = "submit"/>
          </form>


        </div>

      );  
    }else{
      return(
        <div>
          <h1> Loading </h1>
        </div>
      );
    }
  }
});

export default GiantBomb;