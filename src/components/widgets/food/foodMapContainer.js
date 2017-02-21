import React, {Component} from 'react';
import Map from './foodMap';
import CSS from './styles/foodstyles.css';

let {APIcall}  = require ('../../../../seed/exAPI');

class foodMapContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount(){
    const arr=[];
    // APIcall.programs.map((a)=>{return a.offices.map((b)=>{
    //   return arr.push(b.location);
    // });
    // });
    this.setState({data:arr});
  }

  render() {
    const location = {
      lat: 40.7575285,
      lng:-73.9884469
    };
    const markers=[
      {location:
        {lat: 40.7575285,
        lng:-73.9884469}
      }
    ];
    return(
    <div id="mapdiv">
      <Map center= {location} markers={markers}/>
    </div>
    );

  }
}

export default foodMapContainer;
