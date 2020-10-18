import React, { Fragment, useContext } from 'react'
import Calendar from 'react-calendar';
import { Header } from 'semantic-ui-react';
import 'react-calendar/dist/Calendar.css';
import { observer } from 'mobx-react-lite';
import SeminarStore from '../../../app/stores/seminarStore';

const SeminarFilter = () => {
    const seminarStore = useContext(SeminarStore);
    const { searchByDate, setSearchByDate } = seminarStore
    return (
        <Fragment>
            <Header
                icon={'calendar'}
                attached
                color={'teal'}
                content={'Select Date'}
                style={{ width: '100%', marginTop: 50 }}
            />
            <Calendar
                value={searchByDate}
                onChange={date => setSearchByDate(date)}
            />
        </Fragment>
    )
}

export default observer(SeminarFilter)
