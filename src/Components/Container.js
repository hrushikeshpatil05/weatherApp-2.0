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
      description:null,
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
        this.setState({
         city:city,data:t,main:main,description:des,check:true
        }, () => {
          console.log(this.state.data)
          console.log(main)
          console.log(this.state.city)
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
        <Weather click={this.checkHandler} main={this.state.main} des={this.state.description} city={this.state.city}/>
      </div>
    );
  }
}
