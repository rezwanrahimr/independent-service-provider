import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import auth from '../../firebase';




// This is Header Section.
const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, [])

  const signOutt = () => {
    signOut(auth)
      .then(() => {
      }).catch((error) => {
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
          <Nav className="me-auto mx-auto ">
            <Link className='text-decoration-none fw-bold me-4 text-black' to="/home">HOME</Link>
            <Link className='text-decoration-none fw-bold me-4 text-black' to="/blog">BLOG</Link>
            <Link className='text-decoration-none fw-bold me-4 text-black' to="/about">ABOUT</Link>
            {
              user?.uid ? (<Link className='text-decoration-none fw-bold me-4 text-black' onClick={signOutt} to="/login">SIGNOUT</Link>) : (<Link className='text-decoration-none fw-bold me-4 text-black' to="/login">LOGIN</Link>)
            }

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;