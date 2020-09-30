import React from 'react';
import NavBar from '../../features/nav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import SeminarDashboard from '../../features/seminars/dashboard/SeminarDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ContactPage from '../../features/contact/ContactPage';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <div>
          <NavBar />
          <Container style={{ marginTop: '7em' }} >
            <Route path='/seminars' component={SeminarDashboard} />
            <Route path='/contact' component={ContactPage} />
          </Container>
        </div>
      )} />
    </div>
  );
}

export default observer(App);
