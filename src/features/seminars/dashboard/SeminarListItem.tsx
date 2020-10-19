import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Item, ItemGroup, Segment, SegmentGroup } from 'semantic-ui-react'
import { ISeminar } from '../../../app/models/seminar'

const SeminarListItem: React.FC<{ seminar: ISeminar }> = ({ seminar }) => {
    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size='small' src={`/assets/categoryImages/${seminar.category.toLowerCase()}.jpg`} />
                        <Item.Content>
                            <Item.Header as={Link} to={`/seminars/${seminar.id}`}>{seminar.name}</Item.Header>
                            <Item.Description>
                                Hosted by {seminar.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment >
                <span>{seminar.description.length > 200 ? seminar.description.substring(0, 250) + "......." : seminar.description}</span>
            </Segment>
            <Segment clearing>
                <Icon name='clock' /> {seminar.dateTime.split('T')[1].substring(0, 5) + " "}
                <Icon name='marker' /> {seminar.address}, {seminar.city}
                <Button as={Link} to={`/seminars/${seminar.id}`} floated='right' content='Read more' color='blue' />
            </Segment>
        </SegmentGroup>
    )
}

export default observer(SeminarListItem);
