import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

const navBar = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item>
                    {/**<img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} />*/}
                Joy Education
            </Menu.Item>
                <Menu.Item name='Seminars' />
               {/*<Menu.Item>
                    <Button positive content="Create seminar" />
               </Menu.Item>*/}
            </Container>
        </Menu>
    )
}

export default navBar
