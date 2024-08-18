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
        {markData.map((data, index) => (
          <li key={index}>
            <button onClick={() => setSelectedArticle(data.ref)}>
              {data.header}
            </button>
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

