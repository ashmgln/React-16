import React, { Component } from 'react';
import styles from './App.css';
import MyPerson from './Person/Person';
class App extends Component {
  index = 1;
  state = {
    strings : [
      1,2,3
    ],
    value: 1
  }

  incrementButtonHandler = () => {
    this.index++;
    console.log("Click"+this.index);
    
      return (
        
          this.setState({value:this.state.value+1})       

      );
    
    
  }
  render() {
    return (
      <div className={styles.App} >
        <h1>This is My first React app</h1>
        <button className = {styles.Red} onClick={this.incrementButtonHandler}>Increment</button>
        <MyPerson string = {this.state.value}/>
        <p>{this.index}</p>
      </div>
    
    );
    //return this.newMethod();
  }

  newMethod() {
   // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'This is my first React App,3rd try though'),MyPerson('This is the First String'),MyPerson('This is the 2nd String'),MyPerson('Go search for more strings somewhere else, douchebag'));
    //return MyPerson();
  }
}



export default App;
