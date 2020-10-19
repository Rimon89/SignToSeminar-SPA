import React, { useContext, useEffect } from 'react'
import SeminarList from './SeminarList'
import { Container, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite'
import SeminarStore from '../../../app/stores/seminarStore';
import SeminarFilter from './SeminarFilter';
import SeminarListItemPlaceholder from './SeminarListItemPlaceholder';

const SeminarDashboard: React.FC = () => {
    const seminarStore = useContext(SeminarStore);

    useEffect(() => {
      seminarStore.loadSeminars();
    }, [seminarStore]);   //[] = So useEffect doesnt get in to a loop.

    return (
        <Container>
        <Row>
          <Col md={8}>
            {seminarStore.loadingInitial ? <SeminarListItemPlaceholder/> : <SeminarList/>}
          </Col>
          <Col md={4}>
            <SeminarFilter/>
          </Col>
        </Row>
      </Container>
    )
}

export default observer(SeminarDashboard);
