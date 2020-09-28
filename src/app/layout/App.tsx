import React, { useState, useEffect, useContext } from 'react';
import { ISeminar } from '../models/seminar';
import NavBar from '../../features/nav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import SeminarDashboard from '../../features/seminars/dashboard/SeminarDashboard';
import agent from '../api/agent';
import SeminarStore from '../stores/seminarStore'
import { observer } from 'mobx-react-lite';

const App = () => {
  const seminarStore = useContext(SeminarStore)

  const [seminars, setSeminars] = useState<ISeminar[]>([])   //We define a constant and pass in an array with two elements. "activities = the state". "setActivities = a function to set the state". "useState = we give this a intial state wich is an empty array"
  const [selectedSeminar, setSelectedSeminar] = useState<ISeminar | null>(null) //Initial state 'selectedSeminar' can be of type Seminar or null.
  const [attendMode, setAttendMode] = useState(false);

  const handleSelectedSeminar = (id:string) => {
    setSelectedSeminar(seminars.filter(a => a.id === id)[0]) //This will create a new array so we want the first element with the id that matches the id in the parameter.
  }

  useEffect(() => {
    seminarStore.loadSeminars();
  }, [seminarStore]);   //[] = So useEffect doesnt get in to a loop.

  return (
    <div>
      <NavBar />
      <Container style={{marginTop: '7em'}} >
        <SeminarDashboard 
          seminars={seminarStore.seminars}
          selectSeminar={handleSelectedSeminar}
          setAttendMode={setAttendMode} />  {/* passing seminars props down to SeminarDashboard component */}
      </Container>
    </div>
  );
}

export default observer(App);
