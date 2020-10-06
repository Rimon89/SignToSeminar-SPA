import React, { useContext, useEffect } from 'react'
import SeminarDetail from '../details/SeminarDetail'
import SeminarForm from '../form/SeminarForm'
import SeminarList from './SeminarList'
import { Container, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite'
import SeminarStore from '../../../app/stores/seminarStore';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const SeminarDashboard: React.FC = () => {
    const seminarStore = useContext(SeminarStore);
    const {attendMode, seminar} = seminarStore;

    useEffect(() => {
      seminarStore.loadSeminars();
    }, [seminarStore]);   //[] = So useEffect doesnt get in to a loop.

    if (seminarStore.loadingInitial) return <LoadingComponent content='Loading seminars...' />
    
    return (
        <Container>
        <Row>
          <Col md={8}>
             <SeminarList/>
          </Col>
          <Col md={4}>
          {seminar && <SeminarDetail />} {/** what is to the right of && will only be executed if it's not equal to null*/}
                {attendMode && <SeminarForm />}
          </Col>
        </Row>
      </Container>
    )
}

export default observer(SeminarDashboard);
