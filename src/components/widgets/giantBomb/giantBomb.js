import React, {Component} from 'react';
import $ from 'jquery';
import {Link, browserHistory} from 'react-router';

class GiantBomb extends Component {
  constructor(props){
    super(props);
    this.state = {
      game: null,
      gameInput: null
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.submitGame = this.submitGame.bind(this);
  }

  handleChange(event){
    let text = event.target.value;
    this.setState({gameInput: text});
    // console.log(this.state.game);
  }

  submitGame(event){
    event.preventDefault();

    let key = "3ccef9878996b4bc77dc8b1d751b63fffbc7f2de";
  
    $.ajax ({
      dataType: "jsonp",
      crossDomain: true,
      jsonp: "json_callback",
      url: "http://www.giantbomb.com/api/search/?format=jsonp&api_key=" + key + "&query=" + this.state.game + "resources=object"
    }).done((data)=> {
        // jQuery('<div>').html(blah).text().substr(8)
      this.setState({game: data.results});
      console.log(data);
    }).fail(()=> {
    }).always(()=> {
    });

  }
  
  render(){

    return (
        <div>
         
          <form onSubmit = {this.submitGame}>
            <input onChange = {this.handleChange.bind(this)} type = "text" placeholder = "giant"/>
            <input type = "submit"/>
          </form>

          {
          
            this.state.game ? <div dangerouslySetInnerHTML= {{ __html: this.state.game.map((a,b)=> {return a.deck })}}></div> : <p> loading </p>
            // this.state.game ? this.state.game.map(function(a,b){
            //   return <h6> {a.deck} </h6>
            // }) : <p> loading </p>


          }
        </div>

      );  
    
  }
}

export default GiantBomb;