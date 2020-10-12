import React, { useContext } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import SeminarStore from '../../../app/stores/seminarStore';
import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../../../app/common/form/TextInput';
import {combineValidators, composeValidators, createValidator, isRequired} from 'revalidate'

const SeminarForm: React.FC = () => {

    const seminarStore = useContext(SeminarStore);
    const { seminar, closeUserForm } = seminarStore;

    const isValidEmail = createValidator(
        message => value => {
          if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return message
          }
        },
        'Invalid email address'
      )

    const validate = combineValidators({
        firstName: isRequired('firstName'),
        lastName: isRequired('lastName'),
        email: composeValidators(
            isRequired('email'),
            isValidEmail
        )(),
        phoneNumber: isRequired('phoneNumber'),
        city: isRequired('city'),
        address: isRequired('address'),
    })

    const user = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        address: '',
        seminarId: ''
    }

    const handleFinalFormSubmit = (values: any) => {
        const {...user} = values

        let newUser = {
            ...user,
            seminarId: seminar!.id
        };
        seminarStore.createUser(newUser);
    }

    return (
        <Segment clearing>
            <FinalForm validate={validate} onSubmit={handleFinalFormSubmit} render={({ handleSubmit, invalid, pristine }) => (
                <Form onSubmit={handleSubmit} >
                    <Field name='firstName' placeholder='Firstname' value={user.firstName} component={TextInput} />
                    <Field component={TextInput} name='lastName' placeholder='Lastname' value={user.lastName} />
                    <Field component={TextInput} name='email' type='email' placeholder='Email' value={user.email} />
                    <Field component={TextInput} name='phoneNumber' placeholder='Phonenumber' value={user.phoneNumber} />
                    <Field component={TextInput} name='city' placeholder='City' value={user.city} />
                    <Field component={TextInput} name='address' placeholder='Address' value={user.address} />
                    <Button disabled={invalid || pristine} floated='right' type='submit' color='blue' content='Submit' />
                    <Button onClick={closeUserForm} floated='right' type='button' content='Cancel' />
                </Form>
            )}>
            </FinalForm>
        </Segment>
    )
}

export default SeminarForm