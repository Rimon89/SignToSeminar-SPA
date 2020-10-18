import React, { Fragment, useContext } from 'react'
import Calendar from 'react-calendar';
import { Header, Menu } from 'semantic-ui-react';
import 'react-calendar/dist/Calendar.css';
import { observer } from 'mobx-react-lite';
import SeminarStore from '../../../app/stores/seminarStore';

const SeminarFilter = () => {
    const seminarStore = useContext(SeminarStore);
    const { searchByDate, setSearchByDate } = seminarStore
    return (
        <Fragment>
                  <Menu vertical size={'large'} style={{ width: '100%', marginTop: 50 }}>
        <Header icon={'filter'} attached color={'teal'} content={'Filters'} />
        <Menu.Item
          active={searchByDate === 'all'}
          onClick={() => setSearchByDate('all')}
          color={'blue'}
          name={'all'}
          content={'All Activities'}
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
                onChange={date => setSearchByDate(date)}
            />
        </Fragment>
    )
}

export default observer(SeminarFilter)
