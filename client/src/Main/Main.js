import React, { Component } from "react";
import Projects from "./Containers/Projects/Projects.js";
import SkillData from "./Containers/Skills/SkillData.js";
import Contact from "./Containers/Contact/Contact.js";
import Menu from "./Components/Menu/Menu.js";
import Header from "./Components/Header/Header.js";
import About from "./Components/About/About.js";
import Footer from "./Components/Footer/Footer.js";
import axios from "axios";

import "./Main.css";

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
        <Menu />
        <Header />
        <About />
        <SkillData />
        <Projects />
        {/* {this.projects()} */}
        <a href="#about" id="myBtn" title="Go to top">
          Top
        </a>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Main;
