import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.svg';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import '../../assets/css/header.css'
export default function Header() {
  const [navbarBg, setNavbarBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className={`position-fixed top-0 z-5 shadow-lg py-4 w-100 ${navbarBg ? 'navbar-white' : 'navbar-transparent'}`}>
        <Container fluid>
          <Navbar.Brand href="#" className={`${navbarBg ? 'text-black' : 'text-white'}`}> <Image src={logo}  /> &nbsp; Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link><Link to="/home" className={`text-black fs-5 text-decoration-none px-4 ${navbarBg ? 'text-black' : 'text-white'}`}>Home</Link></Nav.Link>
              <Nav.Link><Link to="/courses" className={`text-black fs-5 text-decoration-none px-4 ${navbarBg ? 'text-black' : 'text-white'}`}>Courses</Link></Nav.Link>
              <Nav.Link><Link to="/about-us" className={`text-black fs-5 text-decoration-none px-4 ${navbarBg ? 'text-black' : 'text-white'}`}>About Us</Link></Nav.Link>
              <Nav.Link><Link to="/team" className={`text-black fs-5 text-decoration-none px-4 ${navbarBg ? 'text-black' : 'text-white'}`}>Team</Link></Nav.Link>
              <Nav.Link><Link to="/contact" className={`text-black fs-5 text-decoration-none px-4 ${navbarBg ? 'text-black' : 'text-white'}`}>Contact</Link></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className={`text-black fs-5 px-4 ${navbarBg ? 'text-black' : 'text-white'}`}>Login</Nav.Link>
              <Nav.Link className={`text-black fs-5 ${navbarBg ? 'text-black' : 'text-white'}`}>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
