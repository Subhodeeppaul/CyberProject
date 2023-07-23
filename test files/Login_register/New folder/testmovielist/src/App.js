// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import bgVideo from './images/bg2.mp4';
import backImage from './images/back.png';
import imageA from './images/a.jpg';
import imageB from './images/b.jpg';
import imageC from './images/c.webp';
import imageD from './images/d.webp';
import imageE from './images/e.jpg';
import imageF from './images/f.webp';
import nextImage from './images/next.png';
import ImageAPage from './ImageAPage';
import ImageBPage from './ImageBPage';
import ImageCPage from './ImageCPage';
import ImageDPage from './ImageDPage';
import ImageEPage from './ImageEPage';
import ImageFPage from './ImageFPage';

function App() {
  useEffect(() => {
    const scrollContainer = document.querySelector('.gallery');
    const backBtn = document.getElementById('backBtn');
    const nextBtn = document.getElementById('nextBtn');

    const handleScroll = (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
      scrollContainer.style.scrollBehavior = 'auto';
    };

    const handleNextClick = () => {
      scrollContainer.style.scrollBehavior = 'smooth';
      scrollContainer.scrollLeft += 900;
    };

    const handleBackClick = () => {
      scrollContainer.style.scrollBehavior = 'smooth';
      scrollContainer.scrollLeft -= 900;
    };

    scrollContainer.addEventListener('wheel', handleScroll);
    nextBtn.addEventListener('click', handleNextClick);
    backBtn.addEventListener('click', handleBackClick);

    return () => {
      scrollContainer.removeEventListener('wheel', handleScroll);
      nextBtn.removeEventListener('click', handleNextClick);
      backBtn.removeEventListener('click', handleBackClick);
    };
  }, []);

  return (
    <Router>
      <>
        <video autoPlay muted loop id="backgroundVideo">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <br />
        <center>
          <h1>
            <font color="white">MOVIE LIST</font>
          </h1>
        </center>
        <div className="gallery-wrap">
          <img src={backImage} id="backBtn" alt="Back" />

          <div className="gallery">
            <div>
              <Link to="/ImageAPage" target="_blank">
                <span>
                  <img src={imageA} height="300px" alt="A" />
                </span>
              </Link>
              <Link to="/ImageBPage" target="_blank">
                <span>
                  <img src={imageB} height="300px" alt="B" />
                </span>
              </Link>
              <Link to="/ImageCPage" target="_blank">
                <span>
                  <img src={imageC} height="300px" alt="C" />
                </span>
              </Link>
            </div>
            <div>
              <Link to="/ImageDPage" target="_blank">
                <span>
                  <img src={imageD} height="300px" alt="D" />
                </span>
              </Link>
              <Link to="/ImageEPage" target="_blank">
                <span>
                  <img src={imageE} height="300px" alt="E" />
                </span>
              </Link>
              <Link to="/ImageFPage" target="_blank">
                <span>
                  <img src={imageF} height="300px" alt="F" />
                </span>
              </Link>
            </div>
          </div>
          <img src={nextImage} id="nextBtn" alt="Next" />
        </div>

        <Switch>
          <Route path="/ImageAPage" component={ImageAPage} />
          <Route path="/ImageBPage" component={ImageBPage} />
          <Route path="/ImageCPage" component={ImageCPage} />
          <Route path="/ImageDPage" component={ImageDPage} />
          <Route path="/ImageEPage" component={ImageEPage} />
          <Route path="/ImageFPage" component={ImageFPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
