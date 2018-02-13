import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Display from './Display.js'
import FavTvList from './FavTvList'


class App extends Component {
  constructor() {
    super();

    this.state = {
      userSearch: "",
      summary: "",
      showsToDisplay: '',
      savedShows: [],
    };
this.deleteShow = this.deleteShow.bind(this)
this.updateShowName = this.updateShowName.bind(this)
  }

  deleteShow(id){
    axios.delete(`/api/shows/${id}`)
    .then(res => {
      this.setState({savedShows:res.data})
    })
  }

  updateShowName(id, show){
    axios.put(`/api/shows/${id}`, {
        show
    })
    .then(res => this.setState({savedShows:res.data}))
}


saveShow(show){
  console.log(show)
  axios.post('/api/shows',{show})
  .then( res => {
    this.setState({savedShows:res.data})
  })
}


  componentDidMount() {
    axios.get('/api/shows')
      .then(res => {
        this.setState({savedShows:res.data})
      })
  }

  getShows() {
    axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${this.state.userSearch}`)
      .then(res => {
        var newStr = res.data.summary.replace(/(<)(.*?)(>)/gi, '')
        console.log(res.data.name)
        this.setState({
          summary: newStr,
          showsToDisplay: res.data.name
        })

      })
    this.setState({ userSearch: "" })
  }
  render() {
    console.log(this.state.showsToDisplay)
    var showsOnScreen = this.state.savedShows.map(item =>{
      return (
        <FavTvList item={item} key={item.id} deleteShow = {this.deleteShow} updateShowName = {this.updateShowName}/>
      //  <p key={item.id}>
      //  {item.show}
      //    <button onClick={() => {
      //      console.log(this)
      //      this.deleteShow(item.id)
      //    }}>Delete</button>
      // </p>
      )
    })
    console.log(this.state)
    return (
      <div className="App">
        <div className="body" id="background">

          <header className="App-header">

            <h1 className="App-title">Night View</h1>
            <h3>Your Source fast TV Info</h3>
          </header>
          <div className="App-intro">
            <div><input type="text" value={this.state.userSearch} onChange={(e) => this.setState({ userSearch: e.target.value })} />
              <button onClick={() => this.getShows()}>Search</button></div>
              <p> Enter the Name of the TV Show you would like to know more about and click "Search".</p>

              <div>
                <section>
                  <Display showName={this.state.showsToDisplay}/>
                </section>
              </div>
            <div className="results">{this.state.summary}</div>
            <button onClick={() => this.saveShow
            (this.state.showsToDisplay)} >Save</button>
            {showsOnScreen}
          </div>
          <p></p>
        </div>
      </div>
    );

  }
}

export default App;
