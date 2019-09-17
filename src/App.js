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
    console.log(this.state.array)
    var a = this.state.array
    if(this.state.count===1){
        a.splice(Math.floor(Math.random()*a.length), 50);
        this.setState({ array: a }) 
        console.log("click 1: "+a);
    }else if(this.state.count===2){
        a.splice(Math.floor(Math.random()*a.length), 25);
        this.setState({ array: a }) 
        console.log("click 2: "+a);
    }else if(this.state.count===3){
        a.splice(Math.floor(Math.random()*a.length), 10);
        this.setState({ array: a }) 
        console.log("click 3: "+a);
    }else if(this.state.count===3){
      a.splice(Math.floor(Math.random()*a.length), 5);
      this.setState({ array: a }) 
      console.log("click 4: "+a);
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
