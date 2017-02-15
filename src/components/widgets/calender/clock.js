import React, {Component} from 'react';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {

      hour: '',
      minutes: '',
      seconds: ''

    }; 
  }

  componentDidMount(){
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let test = 0;
    let startTime = () =>{
      for(let i = 0; i < 0; i++){
        test += 1;
      }
    }; 
   
     
    this.setState({
      hour: hour, minutes: minutes, seconds: seconds
    });
 
  }


  render(){
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
}

export default Clock;