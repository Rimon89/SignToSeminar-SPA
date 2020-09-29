import React, { useEffect, useContext } from 'react';
import NavBar from '../../features/nav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import SeminarDashboard from '../../features/seminars/dashboard/SeminarDashboard';
import SeminarStore from '../stores/seminarStore'
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ContactPage from '../../features/contact/ContactPage';

const App = () => {
  const seminarStore = useContext(SeminarStore)

  useEffect(() => {
    seminarStore.loadSeminars();
  }, [seminarStore]);   //[] = So useEffect doesnt get in to a loop.

  return (
    <div>
      <NavBar />
      <Container style={{marginTop: '7em'}} >
      <Route exact path='/' component={HomePage} />
      <Route path='/seminars' component={SeminarDashboard} />
      <Route path='/contact' component={ContactPage} />
      </Container>
    </div>
  );
}

export default observer(App);
