import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { ISeminar } from '../../../app/models/seminar'

interface IProps {
    setAttendMode: (attendMode: boolean) => void;
    seminar: ISeminar;
}

const SeminarForm:React.FC<IProps> = ({setAttendMode, seminar}) => {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Firstname'/>
                <Form.Input placeholder='Lastname'/>
                <Form.Input type='email' placeholder='email'/>
                <Form.Input placeholder='City'/>
                <Form.Input placeholder='Address'/>
                <Form.Input value={seminar.name} />
                <Form.Input value={seminar.id} type='hidden' />
                <Button floated='right' type='submit' color='blue' content='Submit' />
                <Button onClick={() => setAttendMode(false)} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default SeminarForm