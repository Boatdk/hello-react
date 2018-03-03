import React, { Component } from 'react';

class Temp extends Component{
  constructor(){
    super();
    this.state = {
      celsius: 0,
      farenheit: 32
    };
  }

  Calculate(event){
    this.setState({celsius:event.target.value,farenheit: event.target.value*5/9 +32});
  }

  render(){
    return(
      <div>
        <h1> Temperature convert </h1>
        <input type="text" name="celsius" value={this.state.celsius}
        onChange={this.Calculate.bind(this)}/>
        <h2> F: {this.state.farenheit.toFixed(2)} </h2>
      </div>
    )
  }
}
export default Temp;
