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
    this.getData("/skills/frontend", "frontend");
    this.getData("/skills/backend", "backend");
    this.getData("/skills/other", "other");
  };

  getData = (path, stateValue) => {
    axios
      .get(path)
      .then(response => {
        let res = response.data.length;
        let resFull = [];
        // For every piece of data in the array push it to a resFull.
        for (let i = 0; i < res; i++) {
          // if (i === res - 1) {
          resFull.push(
            <li>
              <span>&#10003;</span>
              {response.data[i].skill_name}
            </li>
          );
          // }
          // } else {
          //   resFull.push(response.data[i].skill_name + ", ");
          // }
        }
        let list = <ul className="dataUL">{resFull}</ul>;
        // console.log(list);
        // Set state of data to complete array (resFull) of data
        this.setState({
          [stateValue]: list
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
        <div className="skillName">{skillName}</div>
      </div>
    );
  };

  render() {
    return (
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
    );
  }
}

export default Skills;
