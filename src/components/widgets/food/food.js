
import React, {Component} from 'react';
import $ from 'jquery';
import {Link, browserHistory} from 'react-router';
import FoodMapContainer from './foodMapContainer.js';
import Map from './foodMap';


class Food extends Component {
  constructor(props){
    super(props);

    this.state = {

      name: null,
      finalObj: []

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.findRestaurant = this.findRestaurant.bind(this);
  }

  handleChange(key, event){
    let text = event.target.value;
    this.setState({[key]: text});
  }

  handleClick(event){
    event.preventDefault();

  }

  findRestaurant(event, ESApi){
    event.preventDefault();
    let key = "1e6c365cc09f900876f608fa492c63a4";
    let url = "https://developers.zomato.com/api/v2.1/search?q=" + this.state.name;

    $.ajax({

      beforeSend: function(xhrObj) {
        xhrObj.setRequestHeader("user-key",key);
      },

      type: "GET",
      url: url


    })
    .done((data)=>{
      this.setState({finalObj:data.restaurants});

    });
  }

  render(){

    if(this.state){


      return (

        <div>



          <form onSubmit = {this.findRestaurant}>
            <input onChange = {this.handleChange.bind(this, "name")} type = "text" placeholder = "name" />
           {// <input onChange = {this.handleChange.bind(this, "zip")} type = "text" placeholder = "zip" />
           }
            <input type = "submit" value = "Button"/>
          </form>

          <div style ={{height: 50}}> </div>




          <center>
            <FoodMapContainer/>
          </center>
          <div style = {{height: 50}} > </div>

          <div style ={{display: "flex", flexWrap: "wrap", marginBottom: 30}}>
            {this.state.finalObj ? this.state.finalObj.map((ele,key)=>{
              return <li style =  {{display:"flex", justifyContent: "center", alignItems: "center", width:250,height: 50, backgroundColor: "#196cfc", borderRadius: 15, marginLeft:  10, marginRight: 10, marginTop: 10, color: "white"}} key = {key}> {ele.restaurant.name} </li>; 
            }) : <p> loading </p>}

          </div>
        </div>



      );
    }else{
      return(
        <div>
          <h1> Loading... </h1>
        </div>
      );
    }
  }
}

export default Food;
