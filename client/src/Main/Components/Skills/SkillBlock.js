import React from "react";
import "./SkillBlock.css";
//Template for each skill section.
const SkillBlock = props => {
  return (
    <div className="skillBlock">
      <ul className="dataUL">
        <img src={props.sData.skillImage} alt="skillimage" />
        <h3 className="skillType">{props.sData.skillType}</h3>
        <div className="skillName">{props.sData.skillName}</div>
      </ul>
    </div>
  );
};

export default SkillBlock;
