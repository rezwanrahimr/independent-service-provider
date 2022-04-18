import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { auth } from '../../firebase.init';

const Header = () => {


  const [user,setUser] = useState({});
  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          console.log(user);
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUser(user);
            // ...
          } else {
              setUser({});
            // User is signed out
            // ...
          }
        });
  },[])
  
      const signOutt = ()=>{
          
  signOut(auth)
  .then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
      }
    
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
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/about">about</Nav.Link>
      {
                user?.uid? (<Nav.Link onClick={signOutt} href="/login">SignOut</Nav.Link> ): ( <Nav.Link href="/login">Login</Nav.Link> ) 
            }
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;