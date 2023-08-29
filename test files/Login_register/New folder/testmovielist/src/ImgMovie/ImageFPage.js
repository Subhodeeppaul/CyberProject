import React from 'react';
import { useHistory } from 'react-router-dom';
import imageF from './video/ImageF.mp4';
import './ImageAPage.css';

function ImageFPage() {
  const history = useHistory(); 

  const bodyStyle = {
    margin: 0,
    padding: 0,
    backgroundColor: 'black',
  };

  const containerStyle = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleBookButtonClick = () => {
    
    history.push('/home'); 
  };

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <h2 style={{ color: 'white' }}>LEO - Bloody Sweet</h2>
        <video autoPlay controls width="1100" height="650">
          <source src={imageF} type="video/mp4" />
        </video>
        <button className="book-button" onClick={handleBookButtonClick}>
          Book This Movie
        </button>
      </div>
    </div>
  );
}

export default ImageFPage;
