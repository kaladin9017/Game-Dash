import $ from 'jquery';
import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
import TopPicks from './topPicks';

class Tv extends Component{
  constructor(props){
    super(props);

    this.state = {
      movie:  '',
      movieArray: [],
      mountMovieArray: [],
      key: "f6f31e7c2df38cc4cfe6116e8d8a0aef0012d342"

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.findMovie = this.findMovie.bind(this);
  }

  
  handleChange(event){
    let movie = event.target.value;
    this.setState({movie: movie });
  }
  
  handleClick(event){
    event.preventDefault();

  }

  findMovie(event){
    event.preventDefault();
    let key = this.state.key;
    let movie = this.state.movie;

    $.ajax({
      
      url:"http://api-public.guidebox.com/v2/search?api_key=" + key + "&type=movie&field=title&query=" + movie
     
    })
    .done((data)=>{
      this.setState({movieArray: data.results});
    });
    
  }


  render(){
    if(this.state){

      return (
        <div>
         
          <form onSubmit = {this.findMovie}>
            <input onChange = {this.handleChange} type = "text" placeholder = "Type Movie"/>
            <input type = "submit" value = "Button"/> 
          </form>

          <TopPicks />
          
          <div style ={{display: 'flex', jusifyContent: 'center', height: 50}}> 
          </div>
          <center>
            <h1>Pick A Movie! </h1>
          </center>
          <div >
            <div style ={{display: "flex", flexWrap: "wrap", marginBottom: 30}}>
              {this.state.movieArray.map((ele,key)=>{

                return (
              
              <div>
                <li style = {{ width: 150, listStyleType: "none"}} key ={key}> 
                  <a href ={"http://demo.guidebox.com/#!movie/ "+ ele.id + "-"} target = "_blank"> 
                  <img src = {ele.poster_120x171}/> 
                  <div>
                    <div style = {{fontSize: 11}}>
                      {ele.original_title} 
                    </div>
                    <div>
                      {ele.release_date} 
                    </div>
                  </div>
                  </a> 
                </li>
             
              </div>
            
              );

              })}
            </div>
          </div> 

        </div>

      );
    }else{
      return(
        <div>
          <h1> Loading </h1>
        </div>
      );
    }
  }
}

export default Tv;