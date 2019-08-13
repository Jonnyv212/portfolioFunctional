import React, { useEffect, useState } from "react";
import PJdata from "./Projects.json";
import DisplayProjects from "../../Components/Projects/DisplayProjects";
import Fade from "react-reveal/Fade";
import axios from "axios";
import "./Projects.css";

const Projects = () =>{

  const [projectData, setProjectData] = useState([{}]);
  const [projectJSON, setProjectJSON] = useState(PJdata)
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    projectListPG();
  }, []);

  //Make an API request to the server to retrieve queried data from the PG DB.
 const getData = () => {
    axios.get("/projects").then(response => {
      let res = response.data.length;
      let resFull = [];
      // For every piece of data in the array push it to a resFull.
      for (let i = 0; i < res; i++) {
        resFull.push(response.data[i]);
      }
      // Set the data state to array after pushing data to resFull[].
      setProjectData(resFull)
    });
  };

  //Generates a project based on the data response from the DB.
  //Takes the data and applies it from this function to the projects function.
 const projectListPG = () => {
  let pjFullData = [];
    if (projectData){
      for (let i = 0; i < projectData.length; i++) {
        pjFullData.push(
          <DisplayProjects pjData={projectData[i]} />
          // <div>Test api</div>
        );
    }
    setMyProjects(pjFullData)
    }else if (projectJSON){
      for (let i = 0; i < projectJSON.length; i++) {
        pjFullData.push(
          <DisplayProjects pjData={projectJSON[i]} />
          // <div>Test json</div>
        );
    }
    setMyProjects(pjFullData)
  }
  return pjFullData;
}

//  const test = () => console.log(myProjects[0])

    return(
     <Fade>
       <div>{myProjects}</div> 
    </Fade>)
}
export default Projects;
