import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import SeminarStore from '../../app/stores/seminarStore';

const NavBar = () => {
  const seminarStore = useContext(SeminarStore);
  const { setSearchByDateOrName } = seminarStore
  
  return (
    <Navbar bg="primary" variant="dark" fixed='top'>
      <Navbar.Brand as={NavLink} exact to='/'>JoyEducation</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} exact to='/seminars'>Seminars</Nav.Link>
        <Nav.Link as={NavLink} exact to='/contact'>Contact</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search seminar" className="mr-sm-2" onChange={e => setSearchByDateOrName(e.target.value.toLocaleLowerCase())} />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  )
}

export default observer(NavBar);
