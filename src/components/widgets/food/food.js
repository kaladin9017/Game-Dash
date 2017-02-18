
import React, {Component} from 'react';
import $ from 'jquery';
import {Link, browserHistory} from 'react-router';
import FoodMapContainer from './foodMapContainer.js';
import Map from './foodMap';


class Food extends Component {
  constructor(props){
    super(props);

    this.state = {
    
      name: 'pizza',
      finalObj: [],
      recents: []
    
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.findRestaurant = this.findRestaurant.bind(this);
    this.recent = this.recent.bind(this);
  }

  handleChange(key, event){
    let text = event.target.value;
    this.setState({[key]: text});
  }

  handleClick(event){
    event.preventDefault();

  }

  recent(ele,event){
    event.preventDefault();

    this.state.recents.length != 6 ? this.setState({recents: this.state.recents.concat(ele.name)}) : this.setState({recents: this.state.recents.pop()})


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


        
          <div style = {{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
            <div>
              <center>
                <FoodMapContainer/>
              </center>
            </div>
            <div style = {{width: 400, height: 400, backgroundColor: 'white', marginLeft: 40}}>
              <center>
                <h1> Recent Deviants! </h1>
                {this.state ? this.state.recents.map((a,b)=>{
                  return <div><h3 key = {b}> <a key = {b} href = {this.state.finalObj.menu_url}>{a} </a> </h3> </div>
                }) : <p> loading </p>}
              </center>

            </div>
          </div>
          <div style = {{height: 50}} > </div>

          <div style ={{display: "flex", flexWrap: "wrap", marginBottom: 30}}>
            {this.state.finalObj ? this.state.finalObj.map((ele,key)=>{
              return <div> <li onClick ={this.recent.bind(this, ele.restaurant)} style =  {{display:"flex", justifyContent: "center", alignItems: "center", width:250,height: 50, backgroundColor: "#196cfc", borderRadius: 15, marginLeft:  10, marginRight: 10, marginTop: 10, color: "white"}} key = {key}> <a href = {ele.restaurant.menu_url}> {ele.restaurant.name }</a> </li> <h1 style = {{fontSize: 11, marginLeft: 22}}>{ele.restaurant.location.address}</h1> <h1 style = {{fontSize: 20, marginLeft: 100}}> rating </h1> <h1 style = {{fontSize: 11, marginLeft: 100}}>{ele.restaurant.user_rating.aggregate_rating}</h1></div>
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