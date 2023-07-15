import React, { Component } from "react";
import Weather from "./Weather";
import axios from "axios";
import { geolocated } from "react-geolocated";

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      lat: null,
      log: null,
      data: [],
      main: null,
      description: "weather",
      temp: 0.0,
      pic: 0,
      check: false,
    };
  }
  checkHandler = (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    this.setState(
      {
        city: city,
      },
      () => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=62b8c17a93209fc79fe76ca99378a295`
          )
          .then((res) => {
            const temp = res.data;
            const t = temp.weather[0];
            const main = t.main;
            const des = t.description;
            let tempr = temp.main.temp - 273.15;
            let res1 = parseFloat(tempr.toFixed(2));
            let tempPic = this.state.pic;
            if (des === "overcast clouds") {
              tempPic = 1;
            } else if (des === "rain" || des === "moderate rain") {
              tempPic = 2;
            } else if (des === "mist" || des === "haze") {
              tempPic = 3;
            } else {
              tempPic = 0;
            }
            this.setState(
              {
                city: city,
                data: t,
                main: main,
                description: des,
                temp: res1,
                pic: tempPic,
                check: true,
              },
              () => {
                console.log(this.state.temp);
                console.log(this.state.description);
              }
            );
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    );
  };

  locationHandler = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          this.setState(
            {
              lat: res.coords.latitude,
              log: res.coords.longitude,
            },
            () => {
              console.log(this.state.lat, this.state.log);
              axios
                .get(
                  `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.log}&appid=62b8c17a93209fc79fe76ca99378a295`
                )
                .then((res) => {
                  const temp = res.data;
                  const t = temp.weather[0];
                  const main = t.main;
                  const des = t.description;
                  let tempr = temp.main.temp - 273.15;
                  let res1 = parseFloat(tempr.toFixed(2));
                  let tempPic = this.state.pic;
                   const city = res.data.name;
                  console.log(city);
                  if (des === "overcast clouds") {
                    tempPic = 1;
                  } else if (des === "rain" || des === "moderate rain") {
                    tempPic = 2;
                  } else if (des === "mist" || des === "haze") {
                    tempPic = 3;
                  } else {
                    tempPic = 0;
                  }
                  this.setState(
                    {
                      city:city,
                      data: t,
                      main: main,
                      description: des,
                      temp: res1,
                      pic: tempPic,
                      check: true,
                    },
                    () => {
                      // console.log(this.state.temp);
                      // console.log(this.state.description);
                    }
                  );
                  console.log(res.data);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          );
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  f;

  render() {
    const one = this.state.data;
    return (
      <div>
        <Weather
          click={this.checkHandler}
          position={this.locationHandler}
          lat={this.state.lat}
          pic={this.state.pic}
          temp={this.state.temp}
          main={this.state.main}
          des={this.state.description}
          city={this.state.city}
        />
      </div>
    );
  }
}
