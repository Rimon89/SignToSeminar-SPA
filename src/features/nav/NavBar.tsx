import { observer } from 'mobx-react-lite';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

const navBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand as={NavLink} exact to='/'>JoyEducation</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} exact to='/seminars'>Seminars</Nav.Link>
        <Nav.Link as={NavLink} exact to='/contact'>Contact</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Seminar" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  )
}

export default observer(navBar);
