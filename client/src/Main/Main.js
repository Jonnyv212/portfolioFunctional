import React, { Component } from "react";
import Projects from "../Projects/Projects.js";
import Skills from "../Skills/Skills.js";
// import ".\client\Email-icon.png"
import "./Main.css";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: "",
      email: "",
      message: ""
    };
  }

  // componentDidMount() {}

  //Navigation bar at the top of the page. Fixed positioning
  nav = () => {
    return (
      <div className="nav">
        <div className="mobileMenu">&#9776;</div>
        <div className="desktopMenu">
        <div className="navName">Jonathan Vega</div>
        <ul>
          <li className="dropdown">
            <button className="dropbtn">
              Resume
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <a href="http://bit.ly/2M6hWsH" target="blank">
                Preview
              </a>
              <a href="http://bit.ly/2YWKx7l">Download</a>
            </div>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        </div>
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
          <hr />
          <ul>
            <li>
              <a href="https://github.com/Jonnyv212/" target="blank">
                <img
                  src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/github2.jpg"
                  alt="github"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jvega212" target="blank">
                <img
                  src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/linkedin2.png"
                  alt="linkedin"
                />
              </a>
            </li>
            <li>
              <a href="mailto:jonnyv212@hotmail.com?Subject=Hello">
                <img
                  src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/Email-icon2.png"
                  alt="email"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    console.log("client: " + name, email, message);

    axios.post("/contact", {
      test: name
    });

    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  contact = () => {
    return (
      <div id="contact">
        <form className="contactContainer">
          <h1>CONTACT ME</h1>
          <div className="upperContact">
            <input
              className="name"
              name="name"
              placeholder="Full Name"
              value={this.state.name}
              onChange={e => this.change(e)}
            />
            <input
              className="email"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={e => this.change(e)}
            />
          </div>
          <textarea
            className="message"
            name="message"
            placeholder="Message"
            value={this.state.message}
            onChange={e => this.change(e)}
          />
          <br />
          <button onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
      </div>
    );
  };

  about = () => {
    return (
      <div id="about">
        <div className="aboutMe">
          <h1>Overview</h1>
          <p>Information Technology professional with 5 years of experience in the
          Education and Healthcare industry. Fast learner able to quickly adapt
          to industry standards, trends, and needs. Passionate about web
          development and learning about new technologies. Searching for the
          right opportunity with a compatible culture.</p>
        </div>
      </div>
    );
  };

  skills = () => {
    return (
      <div id="skills">
      <h1>Skills</h1> 
        <Skills />
        </div>
    );
  };
  projects = () => {
    return (
      <div id="projects">
        <h1>Projects</h1>
        <div className="content">
          <Projects />
        </div>
      </div>
    );
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
            <a href="https://github.com/Jonnyv212/" target="blank">
              <img
                src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/footer/github2.jpg"
                alt="github"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jvega212" target="blank">
              <img
                src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/footer/linkedin2.png"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a href="mailto:jonnyv212@hotmail.com?Subject=Hello">
              <img
                src="https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/header/Email-icon2.png"
                alt="email"
              />
            </a>
          </li>
        </ul>
      </div>
    );
  };
  render() {
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    }

    return (
      <div className="main">
        {this.nav()}
        {this.header()}
        {this.about()}
        {this.skills()}
        {this.projects()}
        {/* {this.content()} */}
        <a href="#navID" id="myBtn" title="Go to top">
          Top
        </a>
        {/* {this.contact()} */}
        {this.footer()}
      </div>
    );
  }
}

export default Main;
