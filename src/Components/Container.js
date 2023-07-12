import React, { Component } from 'react';
import Weather from "./Weather";
import axios from 'axios';

export default class Container extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      city: null,
      data: [],
      main: null,
      description:"weather",
      temp:"temp",
      check: false
    };
  }
  checkHandler = (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    this.setState({
      city:city
    },()=>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=62b8c17a93209fc79fe76ca99378a295`)
      .then(res => {
        const temp = res.data;
        const t = temp.weather[0];
        const main = t.main;
        const des = t.description;
        const tempr = temp.main.temp;
        this.setState({
         city:city,data:t,main:main,description:des,temp:tempr,check:true
        }, () => {
          console.log(this.state.temp);
          console.log(this.state.description)
        });
      })
      .catch(err => {
        console.log(err.message);
      });
    })
  }
  

  render() {
    const one = this.state.data;
    return (
      <div>
        <Weather click={this.checkHandler} temp={this.state.temp} main={this.state.main} des={this.state.description} city={this.state.city}/>
      </div>
    );
  }
}
