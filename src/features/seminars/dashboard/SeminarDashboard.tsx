import React, { useContext } from 'react'
import { ISeminar } from '../../../app/models/seminar'
import SeminarDetail from '../details/SeminarDetail'
import SeminarForm from '../form/SeminarForm'
import SeminarList from './SeminarList'
import { Container, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite'
import SeminarStore from '../../../app/stores/seminarStore';

interface IProps {
    seminars: ISeminar[];
    selectSeminar: (id: string) => void;
    setAttendMode: (attendMode: boolean) => void
}

const SeminarDashboard: React.FC<IProps> = ({ seminars, selectSeminar, setAttendMode }) => {
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
