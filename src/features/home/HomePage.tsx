import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Header, Segment } from 'semantic-ui-react'

const HomePage = () => {
    return (
        <Segment inverted textAlign='center' vertical className='homeSegment' >
            <Container text>
                <Header as='h1' inverted>
                    JoyEducation
            </Header>
                <Header as='h2' inverted content='Welcome to JoyEducation' />
                <Button as={Link} to='/seminars' size='huge' inverted>
                    Take me to the seminars!
            </Button>
            </Container>
        </Segment>
    )
}

export default HomePage
