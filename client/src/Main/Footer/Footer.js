import React from "react";
import "./Footer.css";

  //Footer at the bottom of the page.
const footer = () => {
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

  export default footer;