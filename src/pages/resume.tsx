import React from 'react';
import './resume.css';

const Resume = () => {
  const pdfUrl = '/resume/resumePublic.jpg';

  return (
    <div>
      <img className="resImg" src={pdfUrl} />
    </div>
  );
};

export default Resume;

