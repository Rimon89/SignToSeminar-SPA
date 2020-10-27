import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Segment, Item, Header, Image } from 'semantic-ui-react'
import { Button } from 'react-bootstrap';
import { ISeminar } from '../../../app/models/seminar';
import ModalStore from '../../../app/stores/modalStore';
import SeminarForm from '../form/SeminarForm';

const seminarImageStyle = {
    filter: 'brightness(30%)'
};

const seminarImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const SeminarDetailHeader: React.FC<{ seminar: ISeminar }> = ({ seminar }) => {
  const modalStore = useContext(ModalStore)

    return (
        <Segment.Group>
            <Segment basic attached='top' style={{ padding: '0' }}>
                <Image fluid src={`/assets/categoryImages/${seminar.category}.jpg`} style={seminarImageStyle} />
                <Segment basic style={seminarImageTextStyle}>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size='huge'
                                    content={seminar.name}
                                    style={{ color: 'white' }}
                                />
                                <p>Time:{" "} {seminar.dateTime.split('T')[1].substring(0, 5)}</p>
                                <p>
                                    Hosted by <strong>{seminar.hostedBy}</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            <Segment clearing attached='bottom'>
                <Button onClick={() => modalStore.openModal(<SeminarForm/>)} variant="outline-primary" block>
                    Attend seminar
                </Button>
            </Segment>
        </Segment.Group>
    )
}

export default observer(SeminarDetailHeader);
