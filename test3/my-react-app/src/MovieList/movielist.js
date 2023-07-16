import React, { useEffect } from 'react';
import './movielist.css';

import bgVideo from './images/bg2.mp4';
import backImage from './images/back.png';
import imageA from './images/a.jpg';
import imageB from './images/b.jpg';
import imageC from './images/c.webp';
import imageD from './images/d.webp';
import imageE from './images/e.jpg';
import imageF from './images/f.webp';
import nextImage from './images/next.png';

function App() {
  useEffect(() => {
    const scrollContainer = document.querySelector(".gallery");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");

    const handleScroll = (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
      scrollContainer.style.scrollBehavior = "auto";
    };

    const handleNextClick = () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 900;
    };

    const handleBackClick = () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= 900;
    };

    scrollContainer.addEventListener("wheel", handleScroll);
    nextBtn.addEventListener("click", handleNextClick);
    backBtn.addEventListener("click", handleBackClick);

    return () => {
      scrollContainer.removeEventListener("wheel", handleScroll);
      nextBtn.removeEventListener("click", handleNextClick);
      backBtn.removeEventListener("click", handleBackClick);
    };
  }, []);

  return (
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
            <span>
              <img src={imageA} height="300px" width="50px" alt="Image A" />
            </span>
            <span>
              <img src={imageB} height="300px" width="50px" alt="Image B" />
            </span>
            <span>
              <img src={imageC} height="300px" width="50px" alt="Image C" />
            </span>
          </div>
          <div>
            <span>
              <img src={imageD} height="300px" width="50px" alt="Image D" />
            </span>
            <span>
              <img src={imageE} height="300px" width="50px" alt="Image E" />
            </span>
            <span>
              <img src={imageF} height="300px" width="20px" alt="Image F" />
            </span>
          </div>
        </div>
        <img src={nextImage} id="nextBtn" alt="Next" />
      </div>
    </>
  );
}

export default App;
