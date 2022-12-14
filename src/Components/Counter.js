import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    increaseCount=()=>{
        this.setState({
            count: this.state.count+1
        })
    }
  render() {
    return (
      <button onClick={this.increaseCount}>Count: {this.state.count}</button>
    )
  }
}
export default Counter