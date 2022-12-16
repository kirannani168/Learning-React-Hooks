import React, { Component } from 'react'

export default class LifeCycleTest extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    clickHandler(){
        this.setState({
            count: this.state.count+1
        })
    }
    componentDidMount(){
        document.title = this.state.count
    }
    componentDidUpdate(){
        document.title = this.state.count
    }
    componentWillUnmount(){
        document.title = 'unmount'
        this.setState({
            count:0
        })
    }
  render() {
    return (
      <div>
      <h3>LifeCycles</h3>
      <pre>Title of webpage will change when you clicked below button</pre>
            <button onClick={this.clickHandler.bind(this)}>Click: {this.state.count}</button>
            <button onClick={this.componentWillUnmount.bind(this)}>Reset</button>
      </div>
    )
  }
}
