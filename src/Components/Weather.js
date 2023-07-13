import React from "react";
import "./Weather.css";
import rain from './img/rain.jpeg';
import normal from './img/normal.jpeg';
import overcastCloud from './img/overcastClouds.jpeg';
import mist from './img/mist.jpeg';
export default function weather(props) {
  const date = new Date().toDateString();
  const data = props.pic;
  let res=normal;
  if(data===1){
    res=overcastCloud;
  }
  if(data===2){
    res=rain;
  }
  if(data===3){
    res=mist;
  }
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <img className="img" src={res} ></img>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{props.temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{props.des}</div>
            <div className="place">{props.city}</div>
          </div>
        </div>
        <div className="date">{date}</div>
      </article>
      <form onSubmit={props.click}>
        <div className="container">
          <input
            className="input"
            type="text"
            id="city"
            placeholder="Please enter your city"
            required
          />
          <br />
          <button type="submit">Fetch Weather</button>
        </div>
      </form>
    </>
  );
}
