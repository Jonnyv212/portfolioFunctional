import React from "react";
import "./Projects.css";
//Generates a project template function. Parameters receive data for the output html.
const DisplayProjects = props => {
  return (
    <div className="project">
      <div className="pTitle">{props.pjName}</div>

      <div className="pImg">
        <img className="image" src={props.pjImage} alt="pjImage" />

        <div className="overlay1">
          <div className="desktopText">{props.pjDesc}</div>
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
      <div className="mobileText">{props.pjDesc}</div>
      <ul className="mobileStack">
        <li>NodeJS</li>
        <li>ReactJS</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
        <li>Axios</li>
        <li>Express</li>
      </ul>
      <div className="PbottomLinks">
        <a href={props.pjPreview}>Demo</a>

        <a href={props.pjSource} target="blank">
          Source
        </a>
      </div>
    </div>
  );
};

export default DisplayProjects;
