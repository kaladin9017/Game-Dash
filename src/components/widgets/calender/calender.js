import  React from  'react';
import  css from  '../../../styles/calender.css';
import  Clock from './clock';

const Calender = React.createClass({

  getIniitalState(){

    return{
      date: '',
      day: '',
      month:'',
      year: '',
      daysArray:''
    };
  },

  componentDidMount () {

    let date = new Date();
    let daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayNumber = date.getDate();
    let day = daysArray[date.getDay()];
    let monthArray = ['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September', 'October','November','December'];
    let month = monthArray[date.getMonth()];
    let year = date.getFullYear();

    this.setState({ date:date, month: month, day: day, year: year, dayNumber: dayNumber});

  
  },

  render(){

    if(this.state){

      return(
        <div style = {{display: 'flex', justifyContent: 'center'}}>
          <div style = {{width: 450}}>

            <div style = {{width: 400, borderRadius: 5}}className="month"> 
              <ul>
                <li className="prev"></li>
                <li className="next"></li>

                  <center>
                    <li>
                      {this.state.month}<br/>
                      <span style={{fontSize:100}}>{this.state.year}</span>
                    </li>
                  </center>

              </ul>
            </div>

            <ul className="weekdays">

              <center>
                <li style={{fontSize:20}}>{this.state.day}</li>
              </center>

            </ul>

            <ul style = {{height: 100}}className="days"> 

              <center> 
                <li >{this.state.dayNumber}</li>
              </center>

              <center>
                <Clock/>
              </center>
             
            </ul>
          </div>

        </div>
      );
    }else{

      return(
        <div>
          <h1> loading </h1>
        </div>
      );
    }
  }
        
});






export default Calender;