import React from 'react'
import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react'
import { ISeminar } from '../../../app/models/seminar'

interface IProps {
  seminar: ISeminar;
}

const SeminarDetail: React.FC<IProps> = ({ seminar }) => {
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
        <ButtonGroup widths={2}>
          <Button basic color="blue" content="Attend" />
          <Button basic color="grey" content="Cancel" />
        </ButtonGroup>
      </Card.Content>
    </Card>
  )
}

export default SeminarDetail