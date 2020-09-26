import React from 'react'
import { ISeminar } from '../../../app/models/seminar'
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';

interface IProps {
    seminars: ISeminar[];
    selectSeminar: (id: string) => void;
}

const SeminarList: React.FC<IProps> = ({ seminars, selectSeminar }) => {
    return (
        <div>
            {seminars.map(seminar => (
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

export default SeminarList