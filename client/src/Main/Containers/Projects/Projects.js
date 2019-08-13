import React, { Component, useEffect, useState } from "react";
import PJdata from "./Projects.json";
import DisplayProjects from "../../Components/Projects/DisplayProjects";
import Fade from "react-reveal/Fade";
import axios from "axios";
import "./Projects.css";

const Projects = () =>{

  const [projectData, setProjectData] = useState([{}]);
  const [myProjects, setMyProjects] = useState();

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

  //Generates a project based on the JSON data.
  //Takes the JSON data and applies it from a loop to the projects function.
  // projectListJSON = () => {
  //   let pjIndexJSON = PJdata.length;
  //   let pjFull = [];
  //   for (let i = 0; i < pjIndexJSON; i++) {
  //     pjFull.push(
  //       this.projects(
  //         PJdata[i].projectName,
  //         PJdata[i].image,
  //         PJdata[i].description,
  //         PJdata[i].preview,
  //         PJdata[i].source
  //       )
  //     );
  //   }
  //   return pjFull;
  // };

  //Generates a project based on the data response from the DB.
  //Takes the data and applies it from this function to the projects function.
 const projectListPG = () => {

    let dataIndex = projectData.length;
    let pjFull = [];    //Generate every project from state data.
    for (let i = 0; i < dataIndex; i++) {
      pjFull.push(
        <DisplayProjects pjData={projectData[i]} />
      );
    }
    setMyProjects(pjFull)
    // return pjFull;
  };
 const test = () => console.log(projectData[0])

    return(
    // <div>{test()}</div>)
     <Fade>
      {myProjects}
      </Fade>)
}
export default Projects;
