import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const navBar = () => {
    return (
        <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="#home">JoyEducation</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#seminars">Seminars</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default navBar
