'use client'
import React, { useState,useEffect } from 'react';
import Logs from '../pages/logs.tsx';
import {markData}  from '../data/markdown.js'; // Adjust the import path based on your directory structure

import './articles.css';

const Articles = () => {
  const [currentPage, setCurrentPage] = useState('Articles');
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    setCurrentPage('Articles');
    setSelectedArticle(null);
  }, []);
  const renderPage = () => {
    if (selectedArticle) {
      return(
        <>
        <button className="backArt" onClick={() => { setCurrentPage('Articles'); setSelectedArticle(null); }}>
          <strong><i>Go Back</i></strong>
        </button>

        <Logs mdFile={selectedArticle} />
        </>
      );
    }

    return (
      <ul className="article-list">
        <h2 className="artHead">Posts</h2>
        {markData.map((data, index) => (
          <li key={index}>
            <button onClick={() => setSelectedArticle(data.ref)}>
              <strong>{data.header}</strong><br/>
            </button>
              <p className="artDate"><i>{data.date}</i></p>
          </li>
        ))}
      </ul>
    );
  };

  return (
      <div className="artBox">
        {renderPage()}
      </div>
  );
};

export default Articles;

