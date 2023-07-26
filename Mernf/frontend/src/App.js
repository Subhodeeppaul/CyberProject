import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LandingPage from "./screens/LandingPage/LandingPage";
import {BrowserRouter,Routes } from 'react-router-dom';
import MyNotes from "./screens/LandingPage/MyNotes/MyNotes";
import LoginScreen from "./screens/LandingPage/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/LandingPage/RegisterScreen/RegisterScreen";

const App = () => ( 
 <BrowserRouter>
    
   <Header/>
    
    <main>
        <Routes path='/' component={LandingPage} exact/>
        <Routes path='/login' component={LoginScreen} exact/>
        <Routes path='/register' component={RegisterScreen} exact/>
        <Routes path='/mynotes' component={()=><MyNotes/>}/>
    
    </main> 
   <Footer/>
   </BrowserRouter>
 
);

export default App;