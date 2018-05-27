import React, { Component } from 'react';
import './App.css';
import UI from './User/UserInput';
import UO from './User/UserOutput';


class App extends Component {
  state = {
      username : 'Friend'
  }
  style= {
      fontSize: '20px',
      color: 'red'
  }
  inputHandler = (event) =>{
    this.setState({username: event.target.value});
  }
  render() {

    this.inputHandler.bind(this);
    return (

      <div className="App">
        <UO   style = {this.style} username = {this.state.username} />   
        <UI   style = {{textAlign:'Center', border:'5px dotted pink'}} click = {this.inputHandler.bind(this)} username={this.state.username}/> 
      </div>
    );
  }
}

export default App;
