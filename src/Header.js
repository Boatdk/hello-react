import React, { Component } from 'react';

class Header extends Component{
  constructor(){
    super();
    this.state = {
      name:"unLike",
      count:0
    };
  }
  render(){
    
    return(
      <div>
          <h1> React Boat </h1>
          <h2>{this.state.name}</h2>
          <h2>{this.state.count}</h2>
      </div>
    );
  }
}
export default Header;
