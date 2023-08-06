import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from 'react-router-dom';
import MyNotes from "./screens/LandingPage/MyNotes/MyNotes";
import LoginScreen from "./screens/LandingPage/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/LandingPage/RegisterScreen/RegisterScreen";


const App = () => (
 <BrowserRouter>
   <Header/>

    <main>
        <Route path='/' component={LandingPage} exact/>
        <Route path='/login' component={LoginScreen} exact/>
        <Route path='/register' component={RegisterScreen} exact/>
        <Route path='/MyNotes' component={()=><MyNotes/>}/>
    </main>
   <Footer/>
 </BrowserRouter>
);

export default App;
