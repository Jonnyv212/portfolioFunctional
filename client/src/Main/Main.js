import React, { Component } from "react";
import Projects from "../Projects/Projects.js";
import Skills from "../Skills/Skills.js";
import Contact from "../Contact/Contact.js";
import "./Main.css";
import "./Menu.css";
import "./Header.css";
import "./Footer.css";
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

  //Navigation bar at the top of the page. Swaps between mobileMenu and desktopMenu.
  menu = () => {
    return (
      <div className="menu">
        <div className="mobileMenu">
          <button className="dropbtn">
            &#9776;
            <div className="dropdown-content">
              <a href="http://bit.ly/2M6hWsH" target="blank">
                Resume
              </a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </button>
        </div>

        <div className="desktopMenu">
          <div className="menuName">Jonathan Vega</div>
          <ul>
            <li className="desktopDropdown">
              <a className="desktopDropbtn">Resume</a>
              <div className="desktopDropdown-content">
                <a href="http://bit.ly/2M6hWsH" target="blank">
                  Preview
                </a>
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

  //Header below the menu.
  header = () => {
    return (
      <div className="header">
        <div className="headername">
          <h1>Jonathan Vega</h1>
          <span>Software Developer</span>
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

  about = () => {
    return (
      <div id="about">
        <div className="aboutMe">
          <h1>Overview</h1>
          <p>
            Information Technology professional with 5 years of experience in
            the Education and Healthcare industry. Fast learner able to quickly
            adapt to industry standards, trends, and needs. Passionate about web
            development and learning about new technologies. Searching for the
            right opportunity with a compatible culture.
          </p>
        </div>
      </div>
    );
  };

  //Gets components from Skills/Skills.js
  skills = () => {
    return (
      <div id="skills">
        <h1>Skills</h1>
        <Skills />
      </div>
    );
  };

  //Gets components from Projects/Projects.js
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
  // content = () => {
  //   return (
  //     <div className="content">
  //       <div id="about">
  //         Information Technology professional with 5 years of experience in the
  //         Education and Healthcare industry. Fast learner able to quickly adapt
  //         to industry standards, trends, and needs. Passionate about web
  //         development and learning about new technologies. Searching for the
  //         right opportunity with a compatible culture.
  //         <Skills />
  //         <Projects />
  //         {this.contact()}
  //       </div>
  //     </div>
  //   );
  // };

  // change = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // contactOld = () => {
  //   return (
  //     <div id="contact">
  //       <form className="contactContainer">
  //         <h1>CONTACT ME</h1>
  //         <div className="upperContact">
  //           <input
  //             type="text"
  //             className="name"
  //             name="name"
  //             placeholder="Full Name"
  //             value={this.state.name}
  //             // onChange={e => this.change(e)}
  //           />
  //           <input
  //             type="email"
  //             className="email"
  //             name="email"
  //             placeholder="Email Address"
  //             value={this.state.email}
  //             // onChange={e => this.change(e)}
  //           />
  //         </div>
  //         <textarea
  //           type="submit"
  //           className="message"
  //           name="message"
  //           placeholder="Message"
  //           value={this.state.message}
  //           // onChange={e => this.change(e)}
  //         />
  //         <br />
  //         <button onClick={e => this.onSubmit(e)}>Submit</button>
  //       </form>
  //     </div>
  //   );
  // };

  contact = () => {
    return (
      <div id="contact">
        <Contact />
      </div>
    );
  };

  //Footer at the bottom of the page.
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
        {this.menu()}
        {this.header()}
        {this.about()}
        {this.skills()}
        {this.projects()}
        <a href="#about" id="myBtn" title="Go to top">
          Top
        </a>
        {/* {this.contactOld()} */}
        {this.contact()}
        {this.footer()}
      </div>
    );
  }
}

export default Main;
