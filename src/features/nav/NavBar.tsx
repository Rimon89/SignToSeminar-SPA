import { observer } from 'mobx-react-lite';
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const navBar = () => {
    return (
        <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand as={NavLink} to='/' >JoyEducation</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to='/seminars' >Seminars</Nav.Link>
          <Nav.Link as={NavLink} to='/contact' >Contact</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default observer(navBar);
