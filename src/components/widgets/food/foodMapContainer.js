import React, {Component} from 'react';
import Map from './foodMap';
import {APIcall} from '../../../../seed/exAPI.js';

const foodMapContainer = React.createClass ({
  getInitialState(){
    return ({data:null});
  },

  componentDidMount(){
    const arr=[];
    APIcall.programs.map((a)=>{return a.offices.map((b)=>{
      return arr.push(b.location);
    });
    });
    this.setState({data:arr});
  },
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
    <div style={{width: 800, height: 400}}>
      <Map center= {location} markers={markers}/>
    </div>
    );

  }
});

export default foodMapContainer;
