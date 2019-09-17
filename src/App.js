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
    count: 0, //กำหนด จำนวนนับเวลากดปุ่ม ให้เป็น 0
    array:Array.from(Array(100).keys()) //กำหนด ค่า ใน Array อันนี้ให้มันมีเลขจำนวน 0-99 เก็บไว้ใน state ที่ชื่อว่า array 
  };
  handleClick = () => { //ฟังก์ชั่น เวลากดปุ่ม
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1 //พอกดปุ่ก็ให้ count + 1 กด 2 ครั้งก็บ +2...+3 ไปเรื่อยๆ
    }));
    this.array()//เรียกใช้ฟังก์ชั้น array
  };
  array() {
    console.log(this.state.array)
    var a = this.state.array //ประกาศตัวแปร a ให้เท่ากับ state ของ array
    if(this.state.count===1){ //ถ้า state ของ count == 1 (หรือกดปุ่ม 1 ครั้ง) ให้เข้าเงื่อนไขนี้
        a.splice(Math.floor(Math.random()*a.length), 50);  //เอา ชุดข้อมูลของ state array มาตัด อันนี้มึงไปหาดูเอาเองละกันคำสั่งนี้ กูก็ไปก็อปเขามา
        this.setState({ array: a }) 
        console.log("click 1: "+a);
    }else if(this.state.count===2){ //เงื่อนไขเมื่อ กดปุ่ม 2 ครั้ง
        a.splice(Math.floor(Math.random()*a.length), 25);
        this.setState({ array: a })  //กำหนด state array เข้าไปใหม่
        console.log("click 2: "+a);
    }else if(this.state.count===3){ //เงื่อนไขเมื่อ กดปุ่ม 3 ครั้ง
        a.splice(Math.floor(Math.random()*a.length), 10);
        this.setState({ array: a }) 
        console.log("click 3: "+a);
    }else if(this.state.count===4){ //เงื่อนไขเมื่อ กดปุ่ม 4 ครั้ง
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
