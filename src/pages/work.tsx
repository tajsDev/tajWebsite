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
                                <h3 className="comp">{data.company}</h3>
                                <h3 className="time"><i>{data.time}</i></h3>
                                    <p className="response">{data.respons}</p>
                                <p className="range" ><br /> <i>Period: {data.range}</i></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;

