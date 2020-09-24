import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import agent from '../../../app/api/agent'
import { ISeminar } from '../../../app/models/seminar'
import { IUser } from '../../../app/models/user'

interface IProps {
    setAttendMode: (attendMode: boolean) => void;
    seminar: ISeminar;
}

const SeminarForm:React.FC<IProps> = ({setAttendMode, seminar}) => {

    const initializeForm = () => {
        return {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            city: '',
            address: '',
            seminarId: ''
        }
    }

    const handleSubmit = () => {
        let newUser = {
            ...user,
            seminarId: seminar.id
          };
        agent.Users.create(newUser);

        console.log(newUser);
        setAttendMode(false);
    }

    const [user, setUser] = useState<IUser>(initializeForm);

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} >
                <Form.Input onChange={handleInput} name='firstName' placeholder='Firstname' value={user.firstName} />
                <Form.Input onChange={handleInput} name='lastName' placeholder='Lastname' value={user.lastName} />
                <Form.Input onChange={handleInput} name='email' type='email' placeholder='Email' value={user.email} />
                <Form.Input onChange={handleInput} name='phoneNumber' placeholder='Phonenumber' value={user.phoneNumber} />
                <Form.Input onChange={handleInput} name='city' placeholder='City' value={user.city} />
                <Form.Input onChange={handleInput} name='address' placeholder='Address' value={user.address} />
                <Button floated='right' type='submit' color='blue' content='Submit' />
                <Button onClick={() => setAttendMode(false)} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default SeminarForm