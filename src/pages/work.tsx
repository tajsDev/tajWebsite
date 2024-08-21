import React from 'react';
import './work.css';
import { workData } from "../data/work.js";

const Work = () => {
    return (
        <div className="timeline">
            <div className="outer">
                {workData.map((data, index) => (
                    <div className="card" key={index}>
                        <div className="info">
                            <h2 className="title">{data.job}</h2>
                            <p>{data.respons}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;

