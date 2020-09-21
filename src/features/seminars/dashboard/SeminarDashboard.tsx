import React from 'react'
import { ISeminar } from '../../../app/models/seminar'
import SeminarDetail from '../details/SeminarDetail'
import SeminarForm from '../form/SeminarForm'
import SeminarList from './SeminarList'
import { Container, Row, Col } from 'react-bootstrap';

interface IProps {
    seminars: ISeminar[];
    selectSeminar: (id: string) => void;
    selectedSeminar: ISeminar | null;
    attendMode: boolean;
    setAttendMode: (attendMode: boolean) => void
}

const SeminarDashboard: React.FC<IProps> = ({ seminars, selectSeminar, selectedSeminar, attendMode, setAttendMode }) => {
    return (
        <Container>
        <Row>
          <Col md={8}>
             <SeminarList seminars={seminars} selectSeminar={selectSeminar} />
          </Col>
          <Col md={4}>
          {selectedSeminar && <SeminarDetail seminar={selectedSeminar} setAttendMode={setAttendMode} />} {/** what is to the right of && will only be executed if it's not equal to null*/}
                {attendMode && <SeminarForm setAttendMode={setAttendMode} seminar={selectedSeminar!} />}
          </Col>
        </Row>
      </Container>
    )
}

export default SeminarDashboard
