import React, { Component } from 'react';
class Content extends Component{
  render(){
    return(
      <div>
          <h1> Boat kod hod </h1>
          <p>{this.props.title}</p>
          <p>{this.props.name}</p>
          <p>{this.props.price}</p>
      </div>
    );
  }
}
export default Content;
