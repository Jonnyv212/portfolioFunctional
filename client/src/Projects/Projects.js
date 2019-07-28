import React, { Component } from "react";
import PJdata from "../Main/Main.json";
import Fade from "react-reveal/Fade";
import axios from "axios";
import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  //Make an API request to the server to retrieve queried data from the PG DB.
  getData = () => {
    axios.get("/projects").then(response => {
      let res = response.data.length;
      let resFull = [];
      // For every piece of data in the array push it to a resFull.
      for (let i = 0; i < res; i++) {
        resFull.push(response.data[i]);
      }
      // Set the data state to array after pushing data to resFull[].
      this.setState({
        data: resFull
      });
    });
  };

  //Generates a project template function. Parameters receive data for the output html.
  projects = (pjName, pjImage, pjDescription, pjPreview, pjSource) => {
    return (
      <div className="project">
        <div className="pTitle">{pjName}</div>

        <div className="pImg">
          <img className="image" src={pjImage} alt="pjImage" />

          <div className="overlay1">
            <div className="desktopText">{pjDescription}</div>
          </div>
          <div className="overlay2">
            <ul className="desktopStack">
              <li>ReactJS</li>
              <li>JavaScript </li>
            </ul>
          </div>
        </div>
        <div className="mobileText">{pjDescription}</div>
        <ul className="mobileStack">
          <li>ReactJS</li>
          <li>JavaScript </li>
        </ul>
        <div className="PbottomLinks">
          <a href={pjPreview}>Demo</a>

          <a href={pjSource} target="blank">
            <img
              src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/projects/source.png"
              alt="source"
            />
            Source
          </a>
        </div>
      </div>
    );
  };

  //Generates a project based on the JSON data.
  //Takes the JSON data and applies it from a loop to the projects function.
  projectListJSON = () => {
    let pjIndexJSON = PJdata.length;
    let pjFull = [];
    for (let i = 0; i < pjIndexJSON; i++) {
      pjFull.push(
        this.projects(
          PJdata[i].projectName,
          PJdata[i].image,
          PJdata[i].description,
          PJdata[i].preview,
          PJdata[i].source
        )
      );
    }
    return pjFull;
  };

  //Generates a project based on the data response from the DB.
  //Takes the data and applies it from this function to the projects function.
  projectListPG = () => {
    let pjName = this.state.data.map(item => item.project_name);
    let pjImage = this.state.data.map(item => item.project_image);
    let pjDesc = this.state.data.map(item => item.project_description);
    let pjPrev = this.state.data.map(item => item.project_preview);
    let pjSource = this.state.data.map(item => item.project_source);
    let dataIndex = this.state.data.length;
    let pjFull = [];

    //Generate every project from state data.
    for (let i = 0; i < dataIndex; i++) {
      pjFull.push(
        this.projects(pjName[i], pjImage[i], pjDesc[i], pjPrev[i], pjSource[i])
      );
    }
    return pjFull;
  };

  //Function that returns the generated projects. Determines the source of projects.
  //If state data is found, generate projects based on database data.
  //Else, generate from local JSON data.
  findProjects = () => {
    if (this.state.data.length > 0) {
      return this.projectListPG();
    } else {
      return this.projectListJSON();
    }
  };
  render() {
    return <Fade>{this.findProjects()}</Fade>;
  }
}
export default Projects;
