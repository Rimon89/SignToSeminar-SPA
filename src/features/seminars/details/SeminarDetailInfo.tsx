import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react'
import { ISeminar } from '../../../app/models/seminar'

const SeminarDetailInfo:React.FC<{seminar: ISeminar}> = ({seminar}) => {
    return (
        <div>
            <Segment.Group>
                <Segment attached='top'>
                    <Grid>
                        <Grid.Column width={1}>
                            <Icon size='large' color='teal' name='info' />
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <p>{seminar.description}</p>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment attached>
                    <Grid verticalAlign='middle'>
                        <Grid.Column width={1}>
                            <Icon name='calendar' size='large' color='teal' />
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <span>
                                {seminar.dateTime}
                            </span>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment attached>
                    <Grid verticalAlign='middle'>
                        <Grid.Column width={1}>
                            <Icon name='marker' size='large' color='teal' />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <span>{seminar.address}, {seminar.city}</span>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Segment.Group>
        </div>
    )
}

export default SeminarDetailInfo
