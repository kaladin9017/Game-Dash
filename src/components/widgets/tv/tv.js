
import React from 'react'
import $ from 'jquery'
import {Link, browserHistory} from 'react-router'

const Tv = React.createClass({
  getInitialState(){
    return {
      movie: '',
      movieArray: []
    }
  },

  handleChange(event){
    var movie = event.target.value
    this.setState({movie:movie })
  },

  handleClick(event){
    event.preventDefault()

  },

  findMovie(event){
    event.preventDefault()
    var key = "f6f31e7c2df38cc4cfe6116e8d8a0aef0012d342"
    var movie = this.state.movie

    $.ajax({
      
      url:'http://api-public.guidebox.com/v2/search?api_key=' + key +'&type=movie&field=title&query='+ movie,
     
    })
    .done((data)=>{
      this.setState({movieArray: data.results})
      console.log(data.results)
    })
    
  },

  render(){
    if(this.state){

      return (
        <div>
         
          <form onSubmit = {this.findMovie}>
            <input onChange = {this.handleChange} type = 'text' placeholder = 'Type Movie'/>
            <input type = 'submit' value = 'Button'/> 
          </form>

          
          <div style ={{height: 50}}> 

          </div>

          {this.state.movieArray.map((ele,key)=>{

            return (
              <li style = {{ listStyleType: "none"}} key ={key}> 
                <a href ={'http://demo.guidebox.com/#!movie/' + ele.id + '-'} target = '_blank'> 
                <img src = {ele.poster_120x171}/> 
                <div>
                  <div>
                    {ele.original_title} 
                  </div>
                  <div>
                    {ele.release_date} 
                  </div>
                </div>
                </a> 
              </li>
            )

          })}

        </div>

      )
    }else{
      return(
        <div>
          <h1> Loading </h1>
        </div>
      )
    }
  }
})

export default Tv