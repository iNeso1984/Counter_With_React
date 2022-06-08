import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }
  render() {
    return (
      <ThemeContext.Consumer>
          {style => (
              <div className='Container'>
              <h1>Count Component</h1>
              <button style={style} className="btn minus" onClick={() => this.changeCount(-1)}>
                -
              </button>
              <span>{this.state.count}</span>
              <button style={style} className="btn plus" onClick={() => this.changeCount(1)}>
                +
              </button>
            </div>)
          }
    
      </ThemeContext.Consumer>
    );
  }
  //setState re-renders component not entire app--> each timeis asynchronised to fix you need to set prevState=> function and return
  changeCount(amount) {
    // this.setState({count: this.state.count + amount})
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
  }
}
