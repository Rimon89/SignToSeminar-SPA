import React, { Fragment } from 'react'
import Calendar from 'react-calendar';
import { Header } from 'semantic-ui-react';
import 'react-calendar/dist/Calendar.css';

const SeminarFilter = () => {
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
                onChange={date => console.log(date)}
            />
        </Fragment>
    )
}

export default SeminarFilter
