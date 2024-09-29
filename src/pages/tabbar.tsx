'use client'
import About from "../pages/about";
import React, { useState } from "react";
import Home from "../pages/home";
import Resume from "../pages/resume";
import Projects from "../pages/projects";
import Logs from "../pages/logs";
import Articles from "../pages/articles";
import Work from "../pages/work";

import "./tabbar.css";

const Tabbar = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'work':
        return <Work />;
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'articles':
        return <Articles/>;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div className="topnav">
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('work')}>Experience</button>
        <button onClick={() => setCurrentPage('projects')}>Projects</button>
        <button onClick={() => setCurrentPage('about')}>About</button>
        <button onClick={() => setCurrentPage('articles')}>Articles</button>
      </div>
      <>
        {renderPage()}
      </>
    </>
  );
};


export default Tabbar;

