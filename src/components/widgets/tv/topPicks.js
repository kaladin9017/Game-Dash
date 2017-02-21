import $ from 'jquery';
import React, {Component} from 'react';
import {Link, browserHistory} from 'react-router';
require('./styles/tvstyles.css');

class TopPicks extends Component{
  constructor(props){
    super(props);

    this.state = {
      
      movies: null

    };

  }

  componentDidMount(){
    
    let topPicks = [

      {
        name: "Warcraft",
        url: 'http://static-api.guidebox.com/111615/thumbnails_movies_medium/135087-3289351589-3506596740-977364569-medium-240x342-alt-.jpg',
        link: "http://demo.guidebox.com/#!movie/135087-"
      },
      {
        name: "Scott Pilgrim vs. The World",
        url: "http://static-api.guidebox.com/thumbnails_movies_medium/12645-1232828880-1346632685-695472048-medium-240x342.jpg",
        link: 'http://demo.guidebox.com/#!movie/128834-'
      },
      {
        name: 'Tomb Raider',
        url: 'http://static-api.guidebox.com/thumbnails_movies_medium/60112-8149600965-7549582747-4289093437-medium-240x342.jpg',
        link: 'http://demo.guidebox.com/#!movie/77709-'
      }
    ];
      
    this.setState({movies: topPicks});

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
        <center><h1 id="topgamerheading"> Trending flicks </h1></center>
          <div style = {{display: 'flex', justifyContent: 'center', flexDirection: "spaceAround"}}>
            {this.state.movies ? this.state.movies.map((a,b)=>{
              return <div key = {b}> <a href = {a.link} target = "blank"> <li style = {{marginLeft: 5, listStyleType: "none"}}key = {b}> {a.name} </li> <li style = {{listStyleType: "none", width: 250}}> <img src = {a.url} /></li> </a> </div>;
            }) : <p> loading </p>}

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

export default TopPicks;