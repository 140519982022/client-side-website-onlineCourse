import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.svg'
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary position-sticky top-0 z-3 shadow-lg py-4">
        <Container fluid>
          <Navbar.Brand href="#"> <Image src={logo} /> &nbsp; Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link  ><Link to={'/home'} className='text-black fs-5 text-decoration-none'>Home</Link></Nav.Link>
              <Nav.Link ><Link to={'/courses'} className='text-black fs-5 text-decoration-none'>Courses</Link></Nav.Link>
              <Nav.Link ><Link to={'/about-us'} className='text-black fs-5 text-decoration-none'>About Us</Link></Nav.Link>
              <Nav.Link ><Link to={'/team'} className='text-black fs-5 text-decoration-none'>Team</Link></Nav.Link>
              <Nav.Link ><Link to={'/contact'} className='text-black fs-5 text-decoration-none'>Contact</Link></Nav.Link>
            </Nav>
            <Nav className="" >
              <Nav.Link className='text-black fs-5'>Login</Nav.Link>
              <Nav.Link className='text-black fs-5'>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
