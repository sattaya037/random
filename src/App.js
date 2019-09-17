// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0,
    array:Array.from(Array(100).keys())
  };
  handleClick = () => { 
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));
    this.array()
  };
  array() {
    var a = this.state.array
    var index = Math.floor( Math.random()*a.length );
   
    if(this.state.count===1){
      console.log("array: "+a);
      console.log("length: "+a.length);
        a.splice( index, 50 ); // Remove the item from the array
      console.log("click 1: "+a);
      console.log("length: "+a.length);
    }else if(this.state.count===2){
      a.splice( index, 25 ); // Remove the item from the array
      console.log("click 2: "+a);
      console.log("length: "+a.length);
    }else if(this.state.count===3){
      a.splice( index, 5 ); // Remove the item from the array
      console.log("click 3: "+a);
      console.log("length: "+a.length);
    }else if(this.state.count===3){
      a.splice( index, 2 ); // Remove the item from the array
      console.log("click 4: "+a);
      console.log("length: "+a.length);
    }
  }
 
  render() {
    return(
        <div className="App">
            <button onClick={this.handleClick}>{this.state.count}</button>
            <br/>
            {/* {this.state.array} */}
        </div>
        
    ) 
  }
}

export default App;
