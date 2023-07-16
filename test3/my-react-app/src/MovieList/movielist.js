import React, { useEffect } from 'react';
import './movielist.css';

function MovieList() {
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
        <source src="images/bg2.mp4" type="video/mp4" />
      </video>
      <br />
      <center>
        <h1>
          <font color="white">MOVIE LIST</font>
        </h1>
      </center>
      <div className="gallery-wrap">
        <img src="images/back.png" id="backBtn" />

        <div className="gallery">
          <div>
            <span>
              <img src="images/a.jpg" height="300px" width="50px" />
            </span>
            <span>
              <img src="images/b.jpg" height="300px" width="50px" />
            </span>
            <span>
              <img src="images/c.webp" height="300px" width="50px" />
            </span>
          </div>
          <div>
            <span>
              <img src="images/d.webp" height="300px" width="50px" />
            </span>
            <span>
              <img src="images/e.jpg" height="300px" width="50px" />
            </span>
            <span>
              <img src="images/f.webp" height="300px" width="20px" />
            </span>
          </div>
        </div>
        <img src="images/next.png" id="nextBtn" />
      </div>
    </>
  );
}

export default MovieList;
