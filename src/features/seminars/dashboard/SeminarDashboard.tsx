import React from 'react'
import { Grid } from 'semantic-ui-react'
import { ISeminar } from '../../../app/models/seminar'
import SeminarDetail from '../details/SeminarDetail'
import SeminarForm from '../form/SeminarForm'
import SeminarList from './SeminarList'

interface IProps {
    seminars: ISeminar[];
    selectSeminar: (id:string) => void;
    selectedSeminar: ISeminar | null;
    attendMode: boolean;
    setAttendMode: (attendMode: boolean) => void
}

const SeminarDashboard: React.FC<IProps> = ({seminars, selectSeminar, selectedSeminar, attendMode, setAttendMode}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <SeminarList seminars={seminars} selectSeminar={selectSeminar} />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedSeminar && <SeminarDetail seminar={selectedSeminar} setAttendMode={setAttendMode} />} {/** what is to the right of && will only be executed if it's not equal to null*/}
                {attendMode && <SeminarForm setAttendMode={setAttendMode} />}
            </Grid.Column>
        </Grid>
    )
}

export default SeminarDashboard
