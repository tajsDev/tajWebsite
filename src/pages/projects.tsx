import React , { useEffect,useState } from "react";
import {projectsData} from "../data/projects.js";
import "./projects.css";

const Projects = () => {
  return (
    <div className="aboutBox" >
      {projectsData.map((data,key) => {
        return(
        <div className="projBox" key={key}>
        <h1 className="name">{data.name}</h1>
        <div className="proj">
          <img className="gif" src={data.image} alt="Coming Soon" />
          <p className="text"><i>{data.text}</i><br /><br/><a className="link" href={data.link} target="_blank"> Check it out here </a></p>
        </div>
        </div>
      );
      })}</div>
  )
}

export default Projects;
