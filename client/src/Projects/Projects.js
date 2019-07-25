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

  getData = () => {
    axios.get("/projects").then(response => {
      let res = response.data.length;
      let resFull = [];
      // For every piece of data in the array push it to a resFull.
      for (let i = 0; i < res; i++) {
        if (i === res - 1) {
          resFull.push(response.data[i]);
        } else {
          resFull.push(response.data[i]);
        }
      }
      // Set state of data to complete array (resFull) of data
      this.setState({
        data: resFull
      });
    });
  };

  // test = () => {
  //   let Arr = [];
  //   let innerArr = [];
  //   let count = 0;
  //   this.state.data.map(filteredItem => {
  //     // blah.push(filteredItem.project_preview)
  //     let entries = Object.entries(filteredItem);
  //     //   for (let i = 1; i < entries.length; i++) {
  //     //     innerArr.push(entries[i][1]);
  //     //     count++;
  //     //     // if ((count = 5)) {
  //     //     //   Arr.push(innerArr);
  //     //     //   count = 0;
  //     //     // }
  //     //   }
  //     console.log(entries[1][1]);
  //     //   console.log(Arr);
  //     return entries;
  //   });
  // };

  //Generates a project template for the portfolio function.
  projects = (pjName, pjImage, pjDescription, pjPreview, pjSource) => {
    return (
      // <div className="Pcontainer">
        <div className="projectContainer">
          <div className="Pimg">
            <img
              src={pjImage}
              alt="pjImage"
              style={{ boxShadow: "0 1rem 1rem rgba(0, 0, 0, 0.2)" }}
            />
          </div>

          <div className="Pinfo">
            <div className="Ptitle">{pjName}</div>
            {pjDescription}
          </div>
        

        <div className="Pbottom">
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

          <div className="Pstacks">
            <ul>
              <li>ReactJS</li>
              <li>JavaScript </li>
            </ul>
          </div>

        </div>

      </div>
    );
  };

  projectsJSON = (pjName, pjImage, pjDescription, pjPreview, pjSource) => {
    return (
        <div className="project">
          <div className="pTitle">
            {pjName}
          </div>

          <div className="pImg">
              <img
                  className="image"
                  src={pjImage}
                  alt="pjImage"
                  style={{ boxShadow: "0 1rem 1rem rgba(0, 0, 0, 0.2)" }}
              />
          
              <div className="overlay1">
                <div className="desktopText">
                    {pjDescription}
                </div>
              </div>
              <div className="overlay2">
                <ul className="desktopStack">
                  <li>ReactJS</li>
                  <li>JavaScript </li>
                </ul>
              </div> 
          </div>
          <div className="mobileText">
                {pjDescription}
              </div>
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
          this.projectsJSON(
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

  projectListPG = () => {
    let pjName = this.state.data.map(item => item.project_name);
    let pjImage = this.state.data.map(item => item.project_image);
    let pjDesc = this.state.data.map(item => item.project_description);
    let pjPrev = this.state.data.map(item => item.project_preview);
    let pjSource = this.state.data.map(item => item.project_source);
    let dataIndex = this.state.data.length;
    let pjFull = [];

    for (let i = 0; i < 2; i++) {
      pjFull.push(
        this.projects(pjName[i], pjImage[i], pjDesc[i], pjPrev[i], pjSource[i])
      );
    }
    // console.log(pjImage[1]);
    return pjFull;
  };

    findProjects = () => {
      if(this.state.data){
        return this.projectListPG();
      }
      else{
        return this.projectListJSON();
      }
    }
  render() {
    return (
        <Fade>{this.projectListJSON()}</Fade>
        // <Fade>{this.findProjects()}</Fade>
        /* <Fade>{this.test2()}</Fade> */
    );
  }
}
export default Projects;
