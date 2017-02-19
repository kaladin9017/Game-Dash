import React, {Component} from 'react';
import {ajax} from 'jquery';
import axios from 'axios';
import {Link, browserHistory} from 'react-router';

class GiantBomb extends Component {
  constructor(props){
    super(props);
    this.state = {
      game: null,
      gameInput: ''
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.submitGame = this.submitGame.bind(this);
  }

  handleChange(event){
    let text = event.target.value;
    this.setState({gameInput: text});
  }

  submitGame(event){
  
    event.preventDefault();
  
    let mashkey = "9AVDJ0SYqzmshxvVyIP3fvB30uxnp11lb4gjsnK07xVmu02YUd";
      
    ajax({
            
      beforeSend: function(xhrObj) {
        xhrObj.setRequestHeader('X-Mashape-Key',mashkey);
      },

      type: "GET",
      url: 'https://ahmedakhan-game-review-information-v1.p.mashape.com/api/v1/information?game_name=' + this.state.gameInput
          
            
    })
    .done((data)=>{
      this.setState({game:data.result});
         
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
          
            this.state.game ? <div> <li> <a href = {this.state.game.metacritic.url} target = "blank"> <h6> {this.state.game.name}</h6> <img style ={{width: 250}} src = {this.state.game.thumbnail} /> </a> <h6> {this.state.game.summary} </h6></li> </div> : <p> CHOOSE A GAME...AND THEN YOU WILL JOIN ME....CHOOSE THE TV....THEN YOU WILL JOIN YOUR MOTHER! </p>

          }
        </div>

      );  
    
  }
}

export default GiantBomb;