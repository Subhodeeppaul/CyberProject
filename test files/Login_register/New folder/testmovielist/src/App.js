import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import home from './home.js';
import MovieStateCity from './MovieStateCity';
import ImageAPage from './ImgMovie/ImageAPage';
import ImageBPage from './ImgMovie/ImageBPage';
import ImageCPage from './ImgMovie/ImageCPage';
import ImageDPage from './ImgMovie/ImageDPage';
import ImageEPage from './ImgMovie/ImageEPage';
import ImageFPage from './ImgMovie/ImageFPage';
import ImageGPage from './ImgMovie/ImageGPage';

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

    if (scrollContainer && backBtn && nextBtn) {
      scrollContainer.addEventListener('wheel', handleScroll);
      nextBtn.addEventListener('click', handleNextClick);
      backBtn.addEventListener('click', handleBackClick);
    }

    return () => {
      if (scrollContainer && backBtn && nextBtn) {
        scrollContainer.removeEventListener('wheel', handleScroll);
        nextBtn.removeEventListener('click', handleNextClick);
        backBtn.removeEventListener('click', handleBackClick);
      }
    };
  }, []);

  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={MovieStateCity} />
          <Route exact path="/home" component={home} />
          <Route exact path="/ImageAPage" component={ImageAPage} />
          <Route exact path="/ImageBPage" component={ImageBPage} />
          <Route exact path="/ImageCPage" component={ImageCPage} />
          <Route exact path="/ImageDPage" component={ImageDPage} />
          <Route exact path="/ImageEPage" component={ImageEPage} />
          <Route exact path="/ImageFPage" component={ImageFPage} />
          <Route exact path="/ImageGPage" component={ImageGPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
