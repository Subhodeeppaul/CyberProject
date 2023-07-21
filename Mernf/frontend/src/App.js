import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LandingPage from "./screens/LandingPage/LandingPage";
import {BrowserRouter,Route } from 'react-router-dom';
import MyNotes from "./screens/LandingPage/MyNotes/MyNotes";

const App = () => ( 
 <BrowserRouter>
    
   <Header/>
    
    <main>
        <Route path='/' component={LandingPage} exact/>
        <Route path='/mynotes' component={()=><MyNotes/>}/>
    
    </main> 
   <Footer/>
   </BrowserRouter>
 
);

export default App;