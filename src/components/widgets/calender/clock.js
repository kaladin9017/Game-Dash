import React from 'react';

const Clock = React.createClass({
  getInitialState(){
    return{

      hour: '',
      minutes: '',
      seconds: ''

    }; 
  },

  componentDidMount(){
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let startTime = () =>{
      for(let i = 0; i < 0; i++){
        
      }
    }; 
   
     
    this.setState({
      hour: hour, minutes: minutes, seconds: seconds
    });
 
  },


  render(){
    // console.log(this.state);
    if(this.state){
    
      return(
        <div>
       
          {this.state.hour}:{this.state.minutes}:{this.state.seconds} 
        </div>
      );
    }else{
      <p> Loading...</p>;
    }
  }
});

export default Clock;