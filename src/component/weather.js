/** @format */
import { MDBCol, MDBRow } from "mdbreact";
import React from "react";

const Weather = props => {
  return (
    <>
      <MDBCol
        sm="12"
        md="8"
        lg="4"
        className="d-flex justify-content-center flex-column"
      >
        <h1 className="h3 text-center">Today's Weather Report</h1>
        <br></br>
        <h1 className="display-3 text-center blue-text ">
          {props.list[0].main.temp}
          <sup>&#x025CB;</sup> C
        </h1>
        <MDBRow className="rounded mb-0 justify-content-center">
          <MDBCol>
            <h2 className="peach-gradient p-1">
              City :<span className="float-right">{props.list[0].name}</span>
              <sup>{props.list[0].sys.country}</sup>
            </h2>

            <h2 className="aqua-gradient p-1 rounded-1">
              Feels-Like :
              <span className="float-right">
                {props.list[0].main.feels_like}
                <sup>&#x025CB;</sup> C
              </span>
            </h2>
            <h2 className="peach-gradient p-1 rounded-1">
              Min-Temp :
              <span className="float-right ">
                {props.list[0].main.temp_min}
                <sup>&#x025CB;</sup> C
              </span>
            </h2>
            <h2 className="aqua-gradient p-1 rounded-1">
              Max-Temp :
              <span className="float-right ">
                {props.list[0].main.temp_max}
                <sup>&#x025CB;</sup> C
              </span>
            </h2>
            <h2 className="peach-gradient p-1 rounded-1">
              Pressure :
              <span className="float-right ">
                {props.list[0].main.pressure} hPa
              </span>
            </h2>
            <h2 className="aqua-gradient p-1 rounded-1">
              Humidity :
              <span className="float-right">
                {props.list[0].main.humidity} %
              </span>
            </h2>
            <h2 className="peach-gradient p-1 rounded-1">
              Weather :
              <span className="float-right">
                {props.list[0].weather[0].main}
              </span>
            </h2>
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <></>
    </>
  );
};
export default Weather;
