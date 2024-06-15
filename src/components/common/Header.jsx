import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.svg'
import Image from 'react-bootstrap/Image';


export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#"> <Image src={logo} /> &nbsp; Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link className='text-black fs-5'>Home</Nav.Link>
              <Nav.Link className='text-black fs-5'>Courses</Nav.Link>
              <Nav.Link className='text-black fs-5'>About Us</Nav.Link>
              <Nav.Link className='text-black fs-5'>Team</Nav.Link>
              <Nav.Link className='text-black fs-5'>Contact</Nav.Link>
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
