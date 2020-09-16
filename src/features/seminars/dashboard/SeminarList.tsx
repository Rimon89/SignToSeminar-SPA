import React from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { ISeminar } from '../../../app/models/seminar'

interface IProps {
    seminars: ISeminar[];
    selectSeminar: (id:string) => void;
}

const SeminarList: React.FC<IProps> = ({ seminars, selectSeminar }) => {
    return (
        <Segment clearing>  {/** clears any floated contents */}
            <Item.Group divided> {/** adds divider between each items */}
                {seminars.map(seminar => (
                    <Item key={seminar.id} >
                        <Item.Content>
                            <Item.Header as='a'>{seminar.name}</Item.Header>
                            <Item.Meta>{seminar.date}</Item.Meta>
                            <Item.Description>
                                <div>{seminar.description}</div>
                                <div><br/>{seminar.city}, {seminar.address}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectSeminar(seminar.id)} floated='right' content='View' color='blue' />
                                <Label basic content={seminar.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}

export default SeminarList