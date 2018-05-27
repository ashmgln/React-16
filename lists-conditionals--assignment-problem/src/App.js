import React, { Component } from 'react';
import './App.css';
import VC from './MyFolder/ValidationComponent';
import CC from './MyFolder/CharComponent';
class App extends Component {
state = {
 input:"Input Value"
}

inputChangeHandler = (event) => {
  this.setState({input:event.target.value});
}

clickHandler = (index) =>{
  let val = this.state.input.split("");
  console.log(val);
  val.splice(index,1);
  val = val.join("");
  console.log(val);
  this.setState({input: val});
}

  render() {
    const val = this.state.input.split("");
    let charList = (
      
        
        val.map((char,index) => {
           return <CC click={this.clickHandler.bind(this,index)} value={this.state.input} index={index} />
          } 
        )
      
    )

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>


        <input onChange={this.inputChangeHandler} value={this.state.input} />
        <VC value={this.state.input.length} />
        {charList}
      </div>
    );
  }
}

export default App;
