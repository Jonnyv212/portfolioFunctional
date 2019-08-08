import React, {useState, useEffect } from "react";
import axios from "axios";
import "./Skills.css";


const Skills = () =>{
    const [stacks, setStack] = useState([
    { 
      image : "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/frontend.png",
      type : 'Frontend',
      path: "/skills/frontend"
    },
    { 
      image : "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/backend.png",
      type : 'Backend',
      path: "/skills/backend"

    },
    { 
      image : "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/git.png",
      type : 'Other',
      path: "/skills/other"
    }
    ]);

      const [skillContainer, setContainerData] = useState([])

//       //Make an API request to the server to retrieve queried data from the PG DB.
//     //Parameters accept a URL path and a state name.
  const getData = (path) => {
      axios
        .get(path)
        .then(response => {
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
          //Assign list to a UL that contains the returned li from the for loop.
          let list = <ul className="dataUL">{resFull}</ul>;
          
          return list;
          // setStack(list)

          //Set the state of the parameter statevalue to the returned list.
          // this.setState({
          //   [stateValue]: list
          // });
        })
        .catch(error => {
          console.log(error);
        });
    };

 const addData = () => {
    setContainerData([...skillContainer, {
      //ITERATE THROUGH EVERY STACK PATH
      data: getData(stacks[0].path)
    }]) 
  }

  useEffect(addData);

  // useEffect(getData(stacks[1].path));
  // useEffect(getData(stacks[2].path));

  // useEffect(getData("/skills/backend", "backend"));
  // useEffect(getData("/skills/other", "other"));



//   //Template for each skill section.
const skillBlock = (image, skillType, skillName) => {
    return (
      <div className="skillBlock">
        <img src={image} alt="skillimage" />
        <h3 className="skillType">{skillType}</h3>
        <div className="skillName">{skillName}</div>
      </div>
    );
  };

const createSkills = () =>{

    let skillArr = [];

    for(let i=0; i < stacks.length; i++){
      skillArr.push(skillBlock(stacks[i].image, stacks[i].type, "test"))
    }
    return skillArr;
  }

const displaySkills = () =>{
    return (
      <div className="skillContainer">
        {createSkills()}
      </div>
    );
  }

  return (
    displaySkills()
  )
}
export default Skills;
