import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Button, Icon, Item, ItemGroup, Segment, SegmentGroup } from 'semantic-ui-react'
import { ISeminar } from '../../../app/models/seminar'
import SeminarStore  from '../../../app/stores/seminarStore'

const SeminarListItem:React.FC<{seminar: ISeminar}> = ({seminar}) => {
    const seminarStore = useContext(SeminarStore);
    const {selectSeminar} = seminarStore
    return (
        <SegmentGroup>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size='small' src={`/assets/categoryImages/${seminar.category.toLowerCase()}.jpg`} />
                        <Item.Content>
                            <Item.Header as='a' onClick={() => selectSeminar(seminar.id)}>{seminar.name}</Item.Header>
                            <Item.Description>
                                Hosted by {seminar.hostedBy}
                    </Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment >
                <span>{seminar.description}</span>
            </Segment>
            <Segment clearing secondary>
                <Icon name='clock' /> {seminar.dateTime}
                <Icon name='marker' /> {seminar.address}, {seminar.city}
                <Button onClick={() => selectSeminar(seminar.id)} floated='right' content='Read more' color='blue' />
            </Segment>
        </SegmentGroup>
    )
}

export default observer(SeminarListItem);
