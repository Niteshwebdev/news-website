import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { Navbar,Container,Nav } from 'react-bootstrap';


const Header = () => {
    return (
        <>

         <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Top</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/National">National</Nav.Link>
              <Nav.Link href="/National">National</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar> 







         
    
  
       
        
      </>
    );
}

export default Header;
