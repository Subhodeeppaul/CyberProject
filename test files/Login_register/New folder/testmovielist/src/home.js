import React from 'react'
import './App.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import bgVideo from './images/bg2.mp4';
import backImage from './images/back.png';
import imageA from './images/a.jpg';
import imageB from './images/b.jpg';
import imageC from './images/c.webp';
import imageD from './images/d.webp';
import imageE from './images/e.jpg';
import imageF from './images/f.webp';
import imageG from './images/g.jpg';
import nextImage from './images/next.png';

const home = () => {
  return (
    <Router>
    <div> <video autoPlay muted loop id="backgroundVideo">
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
      <div>
      <Link to="/ImageGPage" target="_blank">
          <span>
            <img src={imageG} height="300px" alt="G" />
          </span>
        </Link>
      </div>
    </div>
    <img src={nextImage} id="nextBtn" alt="Next" />
  </div>
</div></Router>
  )
}

export default home;