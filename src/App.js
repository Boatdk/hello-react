import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Content from './Content';
import Temp from './temp';
//สร้าง component -JSX
class App extends Component {
    constructor(){
      super();
      this.state={
        data:[],
        message:"UnLike",
        type:""
      };
      this.changeMessage = this.changeMessage.bind(this);
      this.insertData = this.insertData.bind(this);
    }

    changeMessage(){
        this.setState({message:"Like"});
    }
    insertData(){
      var item="fuck";
      var myArray=this.state.data;
      myArray.push(item);
      this.setState({data:myArray});
    }
    onChange(event){
      this.setState({type:event.target.value})
    }
    render(){
      return(
        <div>
              <Header/>
              <Content title="TESTING REACT" name="Boat" price="1M"/>
              <Footer/>
              <h1> {this.state.message} </h1>
              <button onClick={this.changeMessage}>{this.state.message}</button>
              <br/>
              <h2> {this.state.data} </h2>
              <button onClick={this.insertData}>insert</button><br/>
              <input type="text" onChange={this.onChange.bind(this)}/>
              <h1>Welcome {this.state.type}</h1>

              <Temp/>

        </div>
      );
    }
}
export default App;
