import React, { ChangeEvent, useContext, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { IUser } from '../../../app/models/user'
import SeminarStore from '../../../app/stores/seminarStore';

const SeminarForm:React.FC = () => {

    const seminarStore = useContext(SeminarStore);
    const {selectedSeminar, closeUserForm} = seminarStore;

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
            seminarId: selectedSeminar!.id
          };
          seminarStore.createUser(newUser);
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
                <Button onClick={closeUserForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default SeminarForm