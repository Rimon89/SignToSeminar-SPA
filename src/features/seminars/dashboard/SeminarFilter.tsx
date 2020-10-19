import React, { Fragment, useContext } from 'react'
import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';
import 'react-calendar/dist/Calendar.css';
import { observer } from 'mobx-react-lite';
import SeminarStore from '../../../app/stores/seminarStore';

const SeminarFilter = () => {
    const seminarStore = useContext(SeminarStore);
    const { searchByDateOrName, setSearchByDateOrName } = seminarStore
    return (
        <Fragment>
            <Menu vertical size={'large'} style={{ width: '100%', marginTop: 50 }}>
                <Header icon={'filter'} attached color={'teal'} content={'Filters'} />
                <Menu.Item
                    active={searchByDateOrName === 'design'}
                    onClick={() => setSearchByDateOrName('design')}
                    color={'blue'}
                    name={'design'}
                    content={"Design"}
                />
                <Menu.Item
                    active={searchByDateOrName === 'marketing'}
                    onClick={() => setSearchByDateOrName('marketing')}
                    color={'blue'}
                    name={'marketing'}
                    content={"Marketing"}
                />
                <Menu.Item
                    active={searchByDateOrName === 'leadership'}
                    onClick={() => setSearchByDateOrName('leadership')}
                    color={'blue'}
                    name={'leadership'}
                    content={"Leadership"}
                />
                <Menu.Item
                    active={searchByDateOrName === 'all'}
                    onClick={() => setSearchByDateOrName('all')}
                    color={'blue'}
                    name={'all'}
                    content={'All Seminars'}
                />
            </Menu>
            <Header
                icon={'calendar'}
                attached
                color={'teal'}
                content={'Select Date'}
                style={{ width: '100%', marginTop: 50 }}
            />
            <Calendar
                value={new Date()}
                onChange={date => setSearchByDateOrName(date)}
            />
        </Fragment>
    )
}

export default observer(SeminarFilter)
