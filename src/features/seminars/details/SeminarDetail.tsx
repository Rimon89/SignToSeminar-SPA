import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap';
import SeminarStore from '../../../app/stores/seminarStore';

const SeminarDetail: React.FC = () => {
  const seminarStore = useContext(SeminarStore);
  const {seminar, openUserForm} = seminarStore;
  return (
    <Card>
      <Card.Img variant="top" src={`/assets/categoryImages/${seminar!.category.toLowerCase()}.jpg`} />
      <Card.Body>
        <Card.Title><strong>{seminar!.name}</strong></Card.Title>
        <Card.Text>
          {seminar!.description}
        </Card.Text>
        <Button onClick={openUserForm} variant="outline-primary" block>
          Attend seminar
        </Button>
      </Card.Body>
    </Card>
  )
}

export default observer(SeminarDetail);