import React, { useState, useEffect } from "react";
import SkillBlock from "../../Components/Skills/SkillBlock";
import axios from "axios";
import "./SkillData.css";

//Navigation bar at the top of the page. Swaps between mobileMenu and desktopMenu.
const SkillData = () => {
  const [frontendSkills, setFrontendSkills] = useState({});
  const [backendSkills, setBackendSkills] = useState({});
  const [otherSkills, setOtherSkills] = useState({});

  const getData = path => {
    axios.get(path).then(response => {
      let resLength = response.data.length;
      let resFull = [];
      // For every piece of data in the array, make an LI containing a checkmark
      //and data then push it to a resFull
      for (let i = 0; i < resLength; i++) {
        resFull.push(
          <li>
            <span>&#10003;</span>
            {response.data[i].skill_name}
          </li>
        );
      }
      if (path == "skills/frontend") {
        setFrontendSkills({
          skillImage:
            "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/frontend.png",
          skillType: "Frontend",
          skillName: resFull
        });
      } else if (path == "skills/backend") {
        setBackendSkills({
          skillImage:
            "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/backend.png",
          skillType: "Backend",
          skillName: resFull
        });
      } else if (path == "skills/other") {
        setOtherSkills({
          skillImage:
            "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/git.png",
          skillType: "Other",
          skillName: resFull
        });
      }
    });
  };

  useEffect(() => {
    getData("skills/frontend");
    getData("skills/backend");
    getData("skills/other");
  }, []);

  return (
    <div className="skillContainer">
      <SkillBlock sData={frontendSkills} />
      <SkillBlock sData={backendSkills} />
      <SkillBlock sData={otherSkills} />
    </div>
  );
};

export default SkillData;
