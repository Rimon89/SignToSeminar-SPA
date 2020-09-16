import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ISeminar } from '../models/seminar';
import NavBar from '../../features/nav/NavBar';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import SeminarDashboard from '../../features/seminars/dashboard/SeminarDashboard';

const App = () => {
  const [seminars, setSeminars] = useState<ISeminar[]>([])   //We define a constant and pass in an array with two elements. "activities = the state". "setActivities = a function to set the state". "useState = we give this a intial state wich is an empty array"
  const [selectedSeminar, setSelectedSeminar] = useState<ISeminar | null>(null) //Initial state 'selectedSeminar' can be of type Seminar or null.

  const handleSelectedSeminar = (id:string) => {
    setSelectedSeminar(seminars.filter(a => a.id === id)[0]) //This will create a new array so we want the first element with the id that matches the id in the parameter.
  }

  useEffect(() => {
    axios.get<ISeminar[]>('https://localhost:5001/api/seminars')
      .then((response) => {
        setSeminars(response.data)
      });
  }, []);   //[] = So useEffect doesnt get in to a loop.

  return (
    <div>
      <NavBar />
      <Container style={{marginTop: '7em'}} >
        <SeminarDashboard 
          seminars={seminars}
          selectSeminar={handleSelectedSeminar}
          selectedSeminar={selectedSeminar}  />  {/* passing seminars props down to SeminarDashboard component */}
      </Container>
    </div>
  );
}

export default App;
