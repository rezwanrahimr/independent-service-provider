import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    
    return (
        <div>
            <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home"><img
        src="https://images.vexels.com/media/users/3/151981/isolated/preview/f8863741dba8034b3e1d4809a01c782a-stethoscope-icon-medical-icons.png"
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
    <Nav className="me-auto mx-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;