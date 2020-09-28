import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';
import { observer } from 'mobx-react-lite';
import SeminarStore from '../../../app/stores/seminarStore';

const SeminarList: React.FC = () => {
    const seminarStore = useContext(SeminarStore);
    const {seminarsByDate, selectSeminar} = seminarStore
    return (
        <div>
            {seminarsByDate.map(seminar => (
                <Card key={seminar.id}>
                    <Card.Header>{seminar.category}</Card.Header>
                    <Card.Body>
                        <Card.Title>{seminar.name}</Card.Title>
                        <Card.Text>
                            {seminar.description}
                        </Card.Text>
                        <Card.Text>
                           Date: {moment(seminar.dateTime).format('LLLL') }
                        </Card.Text>
                        <Card.Text>
                            {seminar.city}, {seminar.address}.
                        </Card.Text>
                        <Card.Text>
                            Available seats: {seminar.availableSeats}
                        </Card.Text>
                        <Button onClick={() => selectSeminar(seminar.id)} variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default observer(SeminarList);