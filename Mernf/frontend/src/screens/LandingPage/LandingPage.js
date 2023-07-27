import {Container,Row,Button} from 'react-bootstrap';
import "./LandingPage.css";
import{Link} from "react-router-dom";
import { useEffect } from 'react';

const LandingPage = () => {
  //useEffect(()=>{
   // const userInfo=localStorage.getItem("userInfo");
 // if(userInfo){
  //  history.push("/mynotes");
  //}
  
  //},[history]);
    return ( 
        <div className="main">
          <Container>
            <Row>
              <div className="intro-text">
                <div>
                  <h1 className='title'>Welcome</h1>
                  <p className='subtitle'>Safe place for notes</p>
                </div>
                <div className='buttonContainer'>
                  <a href='/login'>
                    <Button size='lg' className='landingbutton'>
                      Login
                    </Button>
                  </a>
                  <a href='/register'>
                    <Button size='lg' className='landingbutton' variant="outline-primary">
                      Sign up
                    </Button>
                  </a>

                </div>
              </div>
           </Row>
          </Container>
           
        
       </div>
    );
};

export default LandingPage;