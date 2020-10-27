import React, { useContext } from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import SeminarStore from '../../../app/stores/seminarStore';
import { Form as FinalForm, Field } from 'react-final-form';
import TextInput from '../../../app/common/form/TextInput';
import {combineValidators, composeValidators, createValidator, isRequired} from 'revalidate'
import ModalStore from '../../../app/stores/modalStore';
import { history } from '../../../index';

const SeminarForm: React.FC = () => {

    const seminarStore = useContext(SeminarStore);
    const { seminar } = seminarStore;
    const modalStore = useContext(ModalStore)

    const isValidEmail = createValidator(
        message => value => {
          if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return message
          }
        },
        'Invalid email address'
      )

    const validate = combineValidators({
        firstName: isRequired('Firstname'),
        lastName: isRequired('Lastname'),
        email: composeValidators(
            isRequired('Email'),
            isValidEmail
        )(),
        phoneNumber: isRequired('Phonenumber'),
        city: isRequired('City'),
        address: isRequired('Address'),
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
        modalStore.closeModal();
        history.push('/seminars')
    }

    return (
        <Segment clearing>
            <FinalForm validate={validate} onSubmit={handleFinalFormSubmit} render={({ handleSubmit, invalid, pristine }) => (
                <Form onSubmit={handleSubmit} >
                    <Header as='h2' content={`Attend ${seminar?.name}`} color='teal' textAlign='center' />
                    <Field name='firstName' placeholder='Firstname' value={user.firstName} component={TextInput} />
                    <Field component={TextInput} name='lastName' placeholder='Lastname' value={user.lastName} />
                    <Field component={TextInput} name='email' type='email' placeholder='Email' value={user.email} />
                    <Field component={TextInput} name='phoneNumber' placeholder='Phonenumber' value={user.phoneNumber} />
                    <Field component={TextInput} name='city' placeholder='City' value={user.city} />
                    <Field component={TextInput} name='address' placeholder='Address' value={user.address} />
                    <Button disabled={invalid || pristine} floated='right' type='submit' color='blue' content='Submit' fluid />
                </Form>
            )}>
            </FinalForm>
        </Segment>
    )
}

export default SeminarForm