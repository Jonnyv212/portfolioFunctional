import React, { Component } from "react";
import Projects from "../Projects/Projects.js";
import Skills from "../Skills/Skills.js";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  // componentDidMount() {}

  //Navigation bar at the top of the page. Fixed positioning
  nav = () => {
    return (
      <div className="nav">
        <p>Jonathan Vega</p>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li className="dropdown">
            <button className="dropbtn">
              Resume
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <a href="http://bit.ly/2XSQuos" target="_blank">
                Preview
              </a>
              <a href="http://bit.ly/2LOGAxL">Download</a>
            </div>
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
                <img
                  src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/github2.jpg"
                  alt="github"
                />
              </a>
            </li>
            <li>
              <a href="#news">
                <img
                  src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/linkedin2.png"
                  alt="linkedin"
                />
              </a>
            </li>
            <li>
              <a href="mailto:jonnyv212@hotmail.com?Subject=Hello">
                <img
                  src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/email6.png"
                  alt="email"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  contact = () => {
    return <div className="contact">Contact Me Goes Here</div>;
  };
  content = () => {
    return (
      <div className="content">
        <div id="about">
          Information Technology professional with 5 years of experience in the
          Education and Healthcare industry. Fast learner able to quickly adapt
          to industry standards, trends, and needs. Passionate about web
          development and learning about new technologies. Searching for the
          right opportunity with a compatible culture.
          {/* <div className="resume">
                <h5>Download Resume</h5>
                <a className="resumeBtn" href="bit.ly/2Lg5Ux0"><img src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/download-button.png" alt="resume"/></a>
          </div> */}
          <hr />
          <Skills />
          <Projects />
          {this.contact()}
        </div>
      </div>
    );
  };

  footer = () => {
    return (
      <div className="footer">
        <ul>
          <li>
            <a href="#home">
              <img
                src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/footer/github2.jpg"
                alt="github"
              />
            </a>
          </li>
          <li>
            <a href="#home">
              <img
                src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/footer/linkedin2.png"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a href="#home">
              <img
                src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/footer/outlook2.png"
                alt="outlook"
              />
            </a>
          </li>
        </ul>
      </div>
    );
  };
  render() {
    return (
      <div className="main">
        {this.nav()}
        {this.header()}
        {this.content()}
        {this.footer()}
      </div>
    );
  }
}

export default Main;
