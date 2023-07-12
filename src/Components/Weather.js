import React from "react";
import "./Weather.css";
export default function weather(props) {
    const date = new Date().toDateString();
  return (
    // <div>
    //   <article className="widget">
    //     <div className="weatherIcon">
          
    //     </div>
    //     <div className="weatherData">
    //       <h1 className="temperature">{props.temp}&deg;</h1>
    //       <h2 className="description">{props.des}</h2>
    //       <h3 className="city">{props.city}</h3>
    //     </div>
    //     <div className="date">
    //         <p>{date}</p>
    //       <h4 className="month" id="month"></h4>
    //       <h5 className="day" id="day"></h5>
    //     </div>
    //   </article>
    //   <form onSubmit={props.click}>
    //   <div className="container">
    //         <input type="text" id="city" placeholder="Please enter your city" required />
    //         <br/>
    //         <button type="submit" >Fetch Weather</button>
    //   </div>
    //   </form>
      
      
    // </div>
    <>
    <article className="widget">
  <div className="weatherIcon"><i className="wi wi-day-cloudy"></i></div>
  <div className="weatherInfo">
    <div className="temperature"><span>{props.temp}&deg;</span></div>
    <div className="description">    
      <div className="weatherCondition">{props.des}</div>    
      <div className="place">{props.city}</div>
    </div>
  </div>
  <div className="date">{date}</div>
</article>
   <form onSubmit={props.click}>
       <div className="container">
            <input className="input" type="text" id="city" placeholder="Please enter your city" required />
             <br/>
             <button type="submit" >Fetch Weather</button>
      </div>
       </form>
</>
  );
}
