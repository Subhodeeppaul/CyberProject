import React, { useEffect, useRef } from 'react';
import './App.css';

import bgAudio from './bg.mp3';

function App() {
  const videoStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = () => {
      audio.play().catch(error => {
        // Play failed, handle the error
        console.error('Failed to play audio:', error);
      });
    };

    // Wait for user interaction to play the audio
    document.addEventListener('click', playAudio);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <>
      <div className="content">
        <video autoPlay muted loop style={videoStyles}>
          <source src={process.env.PUBLIC_URL + '/bg2.mp4'} type="video/mp4" />
        </video>
        <div className="container">
          <div className="box">
            <h1>List of States / Cities</h1>
            <ul>
            <li > <span > </span><a href>Kolkata</a > </li > 
        <li > < span > </span><a href>Delhi</a > </li > <li > < span > </span><a href>Maharashtra</a > </li > <
        li > < span > </span><a href>Tamil Nadu</a > </li > <
        li > < span > </span><a href>Karnataka</a > </li > <
        li > < span > </span><a href>Madhya Pradesh</a > </li > <
        li > < span > </span>< a href>Andhra Pradesh</a > </li > <
        li > < span > </span><a href>Uttar Pradesh</a > </li > <
        li > < span > </span><a href>Jammu and Kashmir</a > </li > <
        li > < span > </span><a href>Uttarakhand</a > </li > <
        li > < span > </span><a href>Rajasthan</a > </li > <
        li > < span > </span><a href>Meghalaya</a > </li > <
        li > < span > </span><a href>Manipur</a > </li > <
        li > < span > </span><a href>Jharkhand</a > </li > <
        li > < span > </span><a href>Tripura</a > </li > 
            </ul>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={bgAudio} loop />
    </>
  );
}

export default App;
