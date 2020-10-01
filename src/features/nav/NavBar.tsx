import { observer } from 'mobx-react-lite';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';

const navBar = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header as={NavLink} exact to='/' >
          JoyEducation
            </Menu.Item>
        <Menu.Item name='Seminars' as={NavLink} to='/seminars' />
        <Menu.Item name='Contact' as={NavLink} to='/contact'>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default observer(navBar);
