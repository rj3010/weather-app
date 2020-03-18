/** @format */
import axios from "axios";
import "./App.css";
import React, { Component } from "react";
import { MDBCol, MDBFormInline, MDBBtn, MDBContainer, MDBRow } from "mdbreact";
import Weather from "./component/weather.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      statusForNoMatch: false,
      data: [],
      cityName: ""
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      cityName: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    const requestParams = {
      method: "get",
      url: "https://api.openweathermap.org/data/2.5/find",
      params: {
        q: this.state.cityName,
        appid: "c694a039adc113e715062d7cbf9f97b2",
        units: "metric"
      }
    };
    const requestParams1 = {
      method: "get",
      url: "https://api.openweathermap.org/data/2.5/forecast",
      params: {
        q: this.state.cityName,
        appid: "c694a039adc113e715062d7cbf9f97b2",
        units: "metric"
      }
    };

    axios(requestParams)
      .then(res => {
        if (res.data.list.length !== 0) {
          this.setState({
            data: res.data,
            status: true,
            statusForNoMatch: false
          });
        } else {
          this.setState({
            status: false,
            statusForNoMatch: true
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
    axios(requestParams1).then(res => {
      console.log(res.data);
    });
  };

  render() {
    const cityName = this.state.cityName;
    return (
      <MDBContainer fluid className="">
        <h1 className="text-center display-4">Basic Weather App</h1>
        <MDBRow className="justify-content-center ">
          <MDBCol sm="12" md="8" lg="6">
            <MDBFormInline className="md-form mr-auto mb-4 d-flex justify-content-center">
              <input
                className="form-control ml-auto"
                type="text"
                placeholder="Enter city name"
                aria-label="Search"
                onChange={this.handleChange}
              />
              <MDBBtn
                gradient="aqua"
                rounded
                size="sm"
                type="button"
                onClick={this.submit}
                className="mr-auto"
              >
                Search
              </MDBBtn>
            </MDBFormInline>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          {this.state.cityName && this.state.statusForNoMatch && (
            <h1 className="text-center display-2 red-text">
              Sorry we do not provide weather updates for the above city.
            </h1>
          )}
          {this.state.status ? <Weather {...this.state.data} /> : null}
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default App;
