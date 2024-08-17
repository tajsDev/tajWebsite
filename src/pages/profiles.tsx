import React from "react";
import Image from "next/image";
import { profilesData } from "../data/profiles.js";
import "./profiles.css";

const Profiles = () => {
  return (
    <div className="navbar">
      {profilesData.map((data, key) => (
        <div key={key}>
          <a href={data.link} target="_blank" >
            <Image 
              width={32} 
              height={32} 
              src={data.image} 
              alt={data.profile}
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Profiles;

