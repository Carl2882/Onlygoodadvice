import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    advice : ""
  };

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice =()=>{
    axios.get('https://api.adviceslip.com/advice')

    .then((response)=>{

      const { advice } = response.data.slip;

      this.setState({advice:advice})
    })

    .catch((error)=>{
      console.log(error)
    })
  }

  render(){

    const { advice } =this.state;

    return(
        <h2>{advice}</h2>
    );
  }
}

export default App;
