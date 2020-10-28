import React, { Fragment, useContext } from 'react'
import { observer } from 'mobx-react-lite';
import SeminarStore from '../../../app/stores/seminarStore';
import SeminarListItem from './SeminarListItem';
import { Item, Label } from 'semantic-ui-react';
import {format} from 'date-fns'

const SeminarList: React.FC = () => {
    const seminarStore = useContext(SeminarStore);
    const { seminarsByDateOrName } = seminarStore
    return (
        <Fragment>
            {seminarsByDateOrName.length > 0 ? seminarsByDateOrName.map(seminar => (
                <Fragment key={seminar.dateTime}>
                    <Label size='large' color='blue'>
                        {format(Date.parse(seminar.dateTime), 'eeee do MMMM')}
                    </Label>
                    <Item.Group divided >
                        <SeminarListItem key={seminar.id} seminar={seminar} />
                    </Item.Group>
                </Fragment>
            )) : <h2 style={{ textAlign: 'center', marginTop: 100 }}>No Seminars Found {':('}</h2>}
        </Fragment>
    )
}

export default observer(SeminarList);