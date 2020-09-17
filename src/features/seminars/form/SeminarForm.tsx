import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

interface IProps {
    setAttendMode: (attendMode: boolean) => void;
}

const SeminarForm:React.FC<IProps> = ({setAttendMode}) => {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Firstname'/>
                <Form.Input placeholder='Lastname'/>
                <Form.Input placeholder='Category'/>
                <Form.Input type='email' placeholder='email'/>
                <Form.Input placeholder='City'/>
                <Form.Input placeholder='Address'/>
                <Form.Input placeholder='Seminar' />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={() => setAttendMode(false)} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default SeminarForm