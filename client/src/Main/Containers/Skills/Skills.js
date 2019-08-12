// import React, { Component, useState, useEffect } from "react";
// import axios from "axios";
// import "./Skills.css";

// class Skills extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       frontend: [],
//       backend: [],
//       other: []
//     };
//   }

//   componentDidMount = () => {
//     this.getData("/skills/frontend", "frontend");
//     this.getData("/skills/backend", "backend");
//     this.getData("/skills/other", "other");
//   };
//   //Make an API request to the server to retrieve queried data from the PG DB.
//   //Parameters accept a URL path and a state name.
//   getData = (path, stateValue) => {
//     axios
//       .get(path)
//       .then(response => {
//         let resLength = response.data.length;
//         let resFull = [];
//         // For every piece of data in the array, make an LI containing a checkmark
//         //and data then push it to a resFull
//         for (let i = 0; i < resLength; i++) {
//           resFull.push(
//             <li>
//               <span>&#10003;</span>
//               {response.data[i].skill_name}
//             </li>
//           );
//         }
//         //Assign list to a UL that contains the returned li from the for loop.
//         let list = <ul className="dataUL">{resFull}</ul>;

//         //Set the state of the parameter statevalue to the returned list.
//         this.setState({
//           [stateValue]: list
//         });

//         useState();
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   // //Template for each skill section.
//   // skillBlock = (image, skillType, skillName) => {
//   //   return (
//   //     <div className="skillBlock">
//   //       <img src={image} alt="skillimage" />
//   //       <h3 className="skillType">{skillType}</h3>
//   //       <div className="skillName">{skillName}</div>
//   //     </div>
//   //   );
//   // };

//   // render() {
//   //   return (
//   //     <div className="skillContainer">
//   //       {this.skillBlock(
//   //         "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/frontend.png",
//   //         "Frontend",
//   //         this.getData("/skills/frontend", "frontend")
//   //       )}
//   //       {this.skillBlock(
//   //         "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/backend.png",
//   //         "Backend",
//   //         this.state.backend
//   //       )}
//   //       {this.skillBlock(
//   //         "https://jv-portfolio-assets.s3.us-east-2.amazonaws.com/Images/skills/git.png",
//   //         "Other",
//   //         this.state.other
//   //       )}
//   //     </div>
//   //   );
//   // }
// }

// export default Skills;
