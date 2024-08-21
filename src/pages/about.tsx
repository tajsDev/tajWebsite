import React , { useEffect,useState } from "react";
import {aboutData} from "../data/about.js";
import "./about.css";

const About = () => {
  return (
    <div className="aboutBox" >
      {aboutData.map((data,key) => {
        return(
        <div className="textBox" key={key}>
        <h3 className="titled">{data.title}</h3>
        <p className="infos"><i>{data.content}</i></p>
        </div>
      );
      })}</div>
  )
}

export default About;
