import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      userSearch:"",
      summary:""


    }
   

    
  }
getShows(){
  axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${this.state.userSearch}`)
  .then ( res =>{
    var newStr = res.data.summary.replace( /(<)(.*?)(>)/gi, '')
    console.log(newStr)
    this.setState({summary:newStr})

  })
this.setState({userSearch:""})
}
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Night View</h1>
        </header>
        <p className="App-intro">
        <div><input type="text" value={this.state.userSearch}onChange={(e)=>this.setState({userSearch:e.target.value})}/>
          <button onClick={()=> this.getShows()}>Search</button></div>
          <p> Enter the Name of the TV Show you would like to know more about and click "Search".</p>
          {this.state.summary}
        </p>
      </div>
    );
  }
}

export default App;
