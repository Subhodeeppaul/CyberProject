import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import home from './home.js';
import SeatBooking3D from './SeatBooking3D';


import Start from './start';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginScreen from './screens/LandingPage/LoginScreen/LoginScreen';
import RegisterScreen from "./screens/LandingPage/RegisterScreen/RegisterScreen";
import FirstPage from './FirstPage';
import ImageAPage from './ImgMovie/ImageAPage';
import ImageBPage from './ImgMovie/ImageBPage';
import ImageCPage from './ImgMovie/ImageCPage';
import ImageDPage from './ImgMovie/ImageDPage';
import ImageEPage from './ImgMovie/ImageEPage';
import ImageFPage from './ImgMovie/ImageFPage';
import ImageGPage from './ImgMovie/ImageGPage';
import hall from './hall';
import Kolkata from './Kolkata';
import Delhi from './Delhi';
import TamilNadu from './TamilNadu';
import Karnataka from './Karnataka';
import MadhyaPradesh from './MadhyaPradesh';
import AndhraPradesh from './AndhraPradesh';
import UttarPradesh from './UttarPradesh';
import JammuAndKashmir from './JammuAndKashmir';
import Uttarakhand from './Uttarakhand';
import Rajasthan from './Rajasthan';
import Meghalaya from './Meghalaya';
import Manipur from './Manipur';
import Maharashtra from './Maharashtra';
import Jharkhand from './Jharkhand';
import Tripura from './Tripura';

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
        <Route exact path="/" component={Start} />
        <Route exact path="/FirstPage" component={FirstPage} />
        <Route exact path="/LandingPage" component={LandingPage} />
        <Route path='/login' component={LoginScreen} exact/>
        <Route path='/register' component={RegisterScreen} exact/> 
          <Route exact path="/hall" component={hall} />
          <Route exact path="/Kolkata" component={Kolkata} />
          <Route exact path="/delhi" component={Delhi} />
          <Route exact path="/tamilnadu" component={TamilNadu} />
          <Route exact path="/karnataka" component={Karnataka} />
          <Route exact path="/madhyapradesh" component={MadhyaPradesh} />
          <Route exact path="/andhrapradesh" component={AndhraPradesh} />
          <Route exact path="/uttarpradesh" component={UttarPradesh} />
          <Route exact path="/jammuandkashmir" component={JammuAndKashmir} />
          <Route exact path="/uttarakhand" component={Uttarakhand} />
          <Route exact path="/rajasthan" component={Rajasthan} />
          <Route exact path="/meghalaya" component={Meghalaya} />
          <Route exact path="/manipur" component={Manipur} />
          <Route exact path="/maharashtra" component={Maharashtra} />
          <Route exact path="/jharkhand" component={Jharkhand} />
          <Route exact path="/tripura" component={Tripura} />
          <Route exact path="/home" component={home} />
          <Route exact path="/ImageAPage" component={ImageAPage} />
          <Route exact path="/ImageBPage" component={ImageBPage} />
          <Route exact path="/ImageCPage" component={ImageCPage} />
          <Route exact path="/ImageDPage" component={ImageDPage} />
          <Route exact path="/ImageEPage" component={ImageEPage} />
          <Route exact path="/ImageFPage" component={ImageFPage} />
          <Route exact path="/ImageGPage" component={ImageGPage} />
          <Route exact path="/SeatBooking3D" component={SeatBooking3D} />
          
        </Switch>
      </>
    </Router>
  );
}

export default App;
