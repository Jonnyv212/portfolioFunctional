import React, { Component } from "react";
import "./Main.css";
import axios from "axios";
import PJdata from "../Main/Main.json";
import Fade from "react-reveal/Fade";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get("/db").then(response => {
      let res = response.data.length;
      let resFull = [];
      // For every piece of data in the array push it to a resFull.
      for (let i = 0; i < res; i++) {
        if (i == res - 1) {
          resFull.push(response.data[i].skill_name);
        } else {
          resFull.push(response.data[i].skill_name + ", ");
        }
        console.log("Inside state data: " + resFull);
      }
      // Set state of data to complete array (resFull) of data
      this.setState({
        data: resFull
      });
    });
  }

  //Navigation bar at the top of the page. Fixed positioning
  nav = () => {
    return (
      <div>
        <p>Jonathan Vega</p>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    );
  };

  //Header below the nav
  header = () => {
    return (
      <div className="header">
        <div className="headername">
          <h1>Jonathan Vega</h1>
          <p>Software Developer</p>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="#home">
                <img src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/github2.jpg" />
              </a>
            </li>
            <li>
              <a href="#news">
                <img src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/linkedin2.png" />
              </a>
            </li>
            <li>
              <a href="mailto:jonnyv212@hotmail.com?Subject=Hello">
                <img src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/email6.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  //Generates a project template for the portfolio function.
  projects = (pjName, pjImage, pjDescription, pjPreview, pjSource) => {
    return (
      <div className="Pcontainer">
        <div className="Pcontent">
          <div className="Pimg">
            <img
              src={pjImage}
              style={{ boxShadow: "0 1rem 1rem rgba(0, 0, 0, 0.2)" }}
            />
          </div>

          <div className="Pinfo">
            <div className="Ptitle">{pjName}</div>
            {pjDescription}
          </div>
        </div>

        <div className="Pbottom">
          <div className="PbottomLinks">
            <a href={pjPreview}>Demo</a>

            <a href={pjSource} target="_blank">
              <img src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/projects/source.png" />
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
        {/* <hr /> */}
      </div>
    );
  };

  //Generates a project based on the JSON data.
  //Takes the JSON data and applies it from a loop to the projects function.
  projectLister = () => {
    let pjIndex = PJdata.length;
    let pjFull = [];
    for (let i = 0; i < pjIndex; i++) {
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

  skillBlock = (image, skillType, skillName) => {
    return (
      <div className="skillBlock">
        <img src={image} />
        <h3 className="skillType">{skillType}</h3>
        <p className="skillName">{skillName}</p>
      </div>
    );
  };
  content = () => {
    return (
      <div id="about">
        <div>
          Description of who I am, what I do. Blah blah blah.
          <div className="Resume">
            <h1>Resume download button here. pdf</h1>
          </div>
          {/* <hr /> */}
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <div className="skillContainer">
            {this.skillBlock(
              "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/frontend.png",
              "Frontend",
              this.state.data
            )}
            {this.skillBlock(
              "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/backend.png",
              "Backend",
              "Skill Name Here"
            )}
            {this.skillBlock(
              "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/git.png",
              "Other",
              "Skill Name Here"
            )}
          </div>
        </div>
        <div className="Projects" id="projects">
          <h2>PROJECTS</h2>
          <Fade>{this.projectLister()}</Fade>
        </div>
      </div>
    );
  };

  footer = () => {
    return (
      <ul>
        <li>
          <a href="#home">
            <img src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/footer/github2.jpg" />
          </a>
        </li>
        <li>
          <a href="#home">
            <img src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/footer/linkedin2.png" />
          </a>
        </li>
        <li>
          <a href="#home">
            <img src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/footer/outlook2.png" />
          </a>
        </li>
      </ul>
    );
  };
  render() {
    return (
      <div className="main">
        <div className="nav">{this.nav()}</div>

        <div>{this.header()}</div>
        <div className="content">{this.content()}</div>
        <div className="footer">{this.footer()}</div>
      </div>
    );
  }
}

export default Main;
