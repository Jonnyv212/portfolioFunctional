import React, { Component } from "react";
import axios from "axios";
import "./Skills.css";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frontend: [],
      backend: [],
      other: []
    };
  }

  componentDidMount = () => {
    // Set state of data to complete array (resFull) of data
    // this.setState({ frontend: this.getData("/skills/frontend") });
    // this.getData("/skills/backend", this.state.backend);
    // this.getData("/skills/other", this.state.other);
    console.log(this.state.frontend);
  };

  getData = () => {
    axios
      .get("/skills")
      .then(response => {
        let res = response.data.length;
        let resFull = [];
        // For every piece of data in the array push it to a resFull.
        for (let i = 0; i < res; i++) {
          if (i === res - 1) {
            resFull.push(response.data[i].skill_name);
          } else {
            resFull.push(response.data[i].skill_name + ", ");
          }
        }
        // Set state of data to complete array (resFull) of data
        this.setState({
          data: resFull
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  skillBlock = (image, skillType, skillName) => {
    return (
      <div className="skillBlock">
        <img src={image} alt="skillimage" />
        <h3 className="skillType">{skillType}</h3>
        <p className="skillName">{skillName}</p>
      </div>
    );
  };

  render() {
    return (
      <div className="skills">
        <h1>Skills</h1>
        <div className="skillContainer">
          {this.skillBlock(
            "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/frontend.png",
            "Frontend",
            this.state.frontend
          )}
          {this.skillBlock(
            "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/backend.png",
            "Backend",
            this.state.backend
          )}
          {this.skillBlock(
            "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/git.png",
            "Other",
            this.state.other
          )}
        </div>
      </div>
    );
  }
}

export default Skills;
