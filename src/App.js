
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {useState, useEffect} from 'react';
// import Login from './components/Login';
import Homepage from  './components/Homepage';
import PatientInfo from './components/PatientInfo';
import EditInfo from './components/EditInfo';
import InitialInfo from './components/InitialInfo';
import InitialQuestion from './components/InitialQuestion';
import MSMQuestions from './components/MSMQuestions';
// import { ClipLoader } from 'react-spinners';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Login/>}/> */}
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/PatientInfo/:id" element={<PatientInfo/>}/>
          <Route exact path="/EditInfo/:id" element={<EditInfo/>}/>
          <Route exact path="/InitialInfo" element={<InitialInfo/>}/>
          <Route exact path="/InitialQuestion" element={<InitialQuestion/>}/>
          <Route exact path="/MSMQuestions" element={<MSMQuestions/>}/>

          


        </Routes>
        </BrowserRouter>

    
  );
}

export default App;
    