import React from 'react'
import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react'
import { ISeminar } from '../../../app/models/seminar'

interface IProps {
  seminar: ISeminar;
  setAttendMode: (attendMode: boolean) => void;
}

const SeminarDetail: React.FC<IProps> = ({ seminar, setAttendMode }) => {
  return (
    <Card fluid> {/**fluid: so it takes up all the space of our 6 column grid*/}
      <Image src={`/assets/categoryImages/${seminar.category.toLowerCase()}.jpg`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{seminar.name}</Card.Header>
        <Card.Meta>
          <span>{seminar.date}</span>
        </Card.Meta>
        <Card.Description>
          {seminar.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ButtonGroup fluid>
          <Button onClick={() => setAttendMode(true)} basic color="blue" content="Attend" />
        </ButtonGroup>
      </Card.Content>
    </Card>
  )
}

export default SeminarDetail