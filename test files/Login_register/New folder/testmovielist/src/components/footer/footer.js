import {Col,Container,Row} from "react-bootstrap";

const Footer = () => {
  return (
      <footer
       style={{
       width:"100%",
       position:"relative",
       bottom:"0",
       display:"flex",
       justifyContent:"centre",
      }}
      >
         <Container>
            <Row>
             
                  <Col className="text-center py-3">Joy Mohunbagan</Col>

            </Row>

        </Container>
     </footer>
    ); 

};

export default Footer;
