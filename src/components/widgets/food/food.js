
import React from 'react'
import $ from 'jquery'
import {Link, browserHistory} from 'react-router'
import FoodMapContainer from './foodMapContainer.js'
import Map from './foodMap';


const Food = React.createClass({
  getInitialState(){
    return {
      name: null,
      finalObj: []
    }
  },

  handleChange(key, event){
    var text = event.target.value
    this.setState({[key]: text})
  },

  handleClick(event){
    event.preventDefault()

  },

  findRestaurant(event, ESApi){
    console.log('here')
    event.preventDefault()
    // https://dev.locu.com/
    var key = "1e6c365cc09f900876f608fa492c63a4"
    // // var key = "35dfc23289ee7385"
    var url = "https://developers.zomato.com/api/v2.1/search?q=" + this.state.name
    // var url =  'https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&search=pizza&street-address=ny'

    // var movie = this.state.movie
    
     // var ESApi = ESApi.onload = function(){

     // ESApi.init('__API_EXPLORER_AUTH_KEY__');
     // };

     // console.log(ESApi)
    //  ESApi.searchRestaurants({ 'street-address': '316 W. Washington Ave. Madison, WI' }, function(response) {
    // var address = response.address;
    // var restaurants = response.restaurants;
    // console.log(address, restaurants);
    // });
    $.ajax({
            
            // headers: { 
            //     "Accept": "application/json",
            //     "user-key": key
            // },
            beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("user-key",key);
                // xhrObj.setRequestHeader("Accept","application/json");
            },
            type: "GET",
            url: url,
          
            
    })
    .done((data)=>{
          this.setState( {finalObj: data.restaurants})
         
    })
  },

  render(){
          
    if(this.state){
          
          
      return (
            
        <div>

          

          <form onSubmit = {this.findRestaurant}>
            <input onChange = {this.handleChange.bind(this, "name")} type = 'text' placeholder = 'name'/>
            <input onChange = {this.handleChange.bind(this, "zip")} type = 'text' placeholder = 'zip'/>
            <input type = 'submit' value = 'Button'/> 
          </form>

          <div style ={{height: 50}}> </div>


        

          <center>
            <FoodMapContainer/>
          </center>
          <div style = {{height: 50}} > </div>

          <div style ={{display: "flex", flexWrap: "wrap", marginBottom: 30}}>
            {this.state.finalObj ? this.state.finalObj.map((ele,key)=>{
              return <li style =  {{display:"flex", justifyContent: 'center', alignItems: 'center', width:250,height: 50, backgroundColor: "#196cfc", borderRadius: 15, marginLeft:  10, marginRight: 10, marginTop: 10, color: 'white'}} key = {key}> {ele.restaurant.name} </li> 
            }) : <p> loading </p>}

          </div>
        </div>



      )
    }else{
      return(
        <div>
          <h1> Loading... </h1>
        </div>
      )
    }
  }
})

export default Food