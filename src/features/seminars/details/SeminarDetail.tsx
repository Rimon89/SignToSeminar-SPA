import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import { RouteComponentProps } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import SeminarStore from '../../../app/stores/seminarStore';
import SeminarDetailHeader from './SeminarDetailHeader';
import SeminarDetailInfo from './SeminarDetailInfo';

interface DetailsParams {
  id: string;
}

const SeminarDetail: React.FC<RouteComponentProps<DetailsParams>> = ({match}) => {
  const seminarStore = useContext(SeminarStore);
  const {seminar, loadSeminar, loadingInitial} = seminarStore;

  useEffect(() => {
    loadSeminar(match.params.id)
}, [loadSeminar, match.params.id])

if (loadingInitial) return <LoadingComponent content='Loading seminar...' />

if(!seminar){
    return <h2>Seminar Not Found</h2>
}

  return (
    <Grid>
      <GridColumn width={3}/>
    <GridColumn width={10}>
      <SeminarDetailHeader seminar={seminar}/>
      <SeminarDetailInfo seminar={seminar}/>
    </GridColumn >
    <GridColumn width={3}/>
  </Grid>
  )
}

export default observer(SeminarDetail);