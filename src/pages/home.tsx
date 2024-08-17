import React, { useState, useEffect, useRef } from 'react';
import './home.scss'; // Ensure this path is correct

const Home = () => {
  const names = [
    "Tomas Jauregui",
    "tajdev",
    "Software Developer",
    "Game Programmer",
  ];

  const [currentName, setCurrentName] = useState(names[0]);
  const [animationClass, setAnimationClass] = useState('fade-in');

  useEffect(() => {
    const updateName = () => {
      setAnimationClass('fade-out');
      setTimeout(() => {
        setCurrentName(prevName => {
          const currentIndex = names.indexOf(prevName);
          const nextIndex = (currentIndex + 1) % names.length;
          return names[nextIndex];
        });
        setAnimationClass('fade-in');
      }, 1000); // Fade-out duration should match the fade-out animation duration
    };

    const intervalId = setInterval(updateName, 5000);

    return () => clearInterval(intervalId);
  }, [names]);

  return (
    <div className="homeBox">
      <div className="introBox">
        <div className="dynamicContent">
          <h1 className={`ahead ${animationClass}`}>{currentName}</h1>
        </div>
        <p className="intro">Hi This is My Website, Please Enjoy!</p>
      </div>
    </div>
  );
};

export default Home;

