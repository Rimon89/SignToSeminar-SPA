import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { ISeminar } from '../../../app/models/seminar'

interface IProps {
  seminar: ISeminar;
  setAttendMode: (attendMode: boolean) => void;
}

const SeminarDetail: React.FC<IProps> = ({ seminar, setAttendMode }) => {
  return (
    <Card>
      <Card.Img variant="top" src={`/assets/categoryImages/${seminar.category.toLowerCase()}.jpg`} />
      <Card.Body>
        <Card.Title>{seminar.name}</Card.Title>
        <Card.Text>
          {seminar.description}
        </Card.Text>
        <Button onClick={() => setAttendMode(true)} variant="outline-primary" block>
          Attend seminar
        </Button>
      </Card.Body>
    </Card>
  )
}

export default SeminarDetail