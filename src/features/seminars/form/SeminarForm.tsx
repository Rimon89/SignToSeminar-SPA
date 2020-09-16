import React from 'react'
import { Form, Segment } from 'semantic-ui-react'

const SeminarForm = () => {
    return (
        <Segment>
            <Form>
                <Form.Input placeholder='Title'/>
                <Form.TextArea placeholder='Description'/>
                <Form.Input placeholder='Category'/>
                <Form.Input type='date' placeholder='Date'/>
                <Form.Input placeholder='City'/>
                <Form.Input placeholder='Address'/>
            </Form>
        </Segment>
    )
}

export default SeminarForm