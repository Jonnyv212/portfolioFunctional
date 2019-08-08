import React from "react";
import "./Header.css";


//Header below the menu.
const header = () => {
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

  export default header;