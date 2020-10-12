import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import { RouteComponentProps } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import SeminarStore from '../../../app/stores/seminarStore';
import SeminarForm from '../form/SeminarForm';
import SeminarDetailHeader from './SeminarDetailHeader';
import SeminarDetailInfo from './SeminarDetailInfo';

interface DetailsParams {
  id: string;
}

const SeminarDetail: React.FC<RouteComponentProps<DetailsParams>> = ({match}) => {
  const seminarStore = useContext(SeminarStore);
  const {seminar, loadSeminar, loadingInitial, attendMode} = seminarStore;

  useEffect(() => {
    loadSeminar(match.params.id)
}, [loadSeminar, match.params.id])

if (loadingInitial) return <LoadingComponent content='Loading activity...' />

if(!seminar){
    return <h2>Activity Not Found</h2>
}

  return (
    <Grid>
    <GridColumn width={10}>
      <SeminarDetailHeader seminar={seminar}/>
      <SeminarDetailInfo seminar={seminar}/>
    </GridColumn >
    <GridColumn width={6}>
        {attendMode && <SeminarForm />}
    </GridColumn>
</Grid>
  )
}

export default observer(SeminarDetail);