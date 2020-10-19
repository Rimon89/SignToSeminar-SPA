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
import { ToastContainer } from 'react-toastify';
import SeminarDetail from '../../features/seminars/details/SeminarDetail';

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer position='bottom-right' />
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <div>
          <NavBar />
          <Container style={{ margin: '7em 0 3em 0' }} >
            <Route exact path='/seminars' component={SeminarDashboard} />
            <Route path='/seminars/:id' component={SeminarDetail} />
            <Route path='/contact' component={ContactPage} />
          </Container>
        </div>
      )} />
    </React.Fragment>
  );
}

export default observer(App);
