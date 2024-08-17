'use client'
import About from "../pages/about.tsx";
import React, { useState } from "react";
import Home from "../pages/home.tsx";
import Resume from "../pages/resume.tsx";
import Projects from "../pages/projects.tsx";

import "./tabbar.css";

const Tabbar = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'devlog':
        return <DevLog />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div className="topnav">
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('projects')}>Projects</button>
        <button onClick={() => setCurrentPage('about')}>About</button>
        <button onClick={() => setCurrentPage('resume')}>Resume</button>
        <button onClick={() => setCurrentPage('devlog')}>Logs</button>
      </div>
      <>
        {renderPage()}
      </>
    </>
  );
};

// Placeholder components for different pages
const DevLog = () => <div>Dev Logs Page</div>;

export default Tabbar;

