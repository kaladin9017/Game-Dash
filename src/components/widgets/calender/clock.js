import React from 'react'

const Clock = React.createClass({
  getInitialState(){
    return{

      hour: '',
      minutes: '',
      seconds: ''

    } 
  },

  componentDidMount(){
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var startTime = () =>{
     for(var i = 0; i < 0; i++){
      
     }
  } 
   
     
    this.setState({
      hour: hour, minutes: minutes, seconds: seconds
    })
  // for(var i = 0; i < 0; i++){
  //  startTime()
  // }
  // m = checkTime(minutes);
  // s = checkTime(seconds);
//      function startTime() {
//     document.getElementById('txt').innerHTML =
//     h + ":" + m + ":" + s;
//     var t = setTimeout(startTime, 500);
// }

  // console.log(this.state)
 },

// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }
// </script>
// </head>

// <body onload="startTime()">

// <div id="txt"></div>

// </body>
  render(){
    console.log(this.state)
    if(this.state){
    
      return(
        <div>
       
          {this.state.hour}:{this.state.minutes}:{this.state.seconds} 
        </div>
      )
    }else{

    }
  }
})

export default Clock