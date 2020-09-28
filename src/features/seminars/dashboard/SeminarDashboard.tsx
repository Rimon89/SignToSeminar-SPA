import React, { useContext } from 'react'
import SeminarDetail from '../details/SeminarDetail'
import SeminarForm from '../form/SeminarForm'
import SeminarList from './SeminarList'
import { Container, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite'
import SeminarStore from '../../../app/stores/seminarStore';

const SeminarDashboard: React.FC = () => {
    const seminarStore = useContext(SeminarStore);
    const {attendMode, selectedSeminar} = seminarStore;
    return (
        <Container>
        <Row>
          <Col md={8}>
             <SeminarList/>
          </Col>
          <Col md={4}>
          {selectedSeminar && <SeminarDetail />} {/** what is to the right of && will only be executed if it's not equal to null*/}
                {attendMode && <SeminarForm />}
          </Col>
        </Row>
      </Container>
    )
}

export default observer(SeminarDashboard);
