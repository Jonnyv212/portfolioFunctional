import React from "react";
import "./Projects.css";
//Generates a project template function. Parameters receive data for the output html.
const DisplayProjects = props => {
  // console.log(props.myData)
  return (
    <div className="project">
      <div className="pTitle">{props.pjData.projectName}</div>

      <div className="pImg">
        <img className="image" src={props.pjData.image} alt="pjImage" />

        <div className="overlay1">
          <div className="desktopText">{props.pjData.description}</div>
        </div>
        <div className="overlay2">
          <ul className="desktopStack">
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>PostgreSQL</li>
            <li>Axios</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
      <div className="mobileText">{props.pjData.description}</div>
      <ul className="mobileStack">
        <li>NodeJS</li>
        <li>ReactJS</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
        <li>Axios</li>
        <li>Express</li>
      </ul>
      <div className="PbottomLinks">
        <a href={props.pjData.preview}>Demo</a>

        <a href={props.pjData.source} target="blank">
          Source
        </a>
      </div>
    </div>
  );
};

export default DisplayProjects;
