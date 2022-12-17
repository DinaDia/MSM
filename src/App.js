import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {useState, useEffect} from 'react';
// import Login from './components/Login';
import Homepage from  './components/Homepage';
import PatientInfo from './components/PatientInfo';
import EditPersonalInfo from './components/Edit/EditPersonalInfo';
import InitialInfo from './components/Questions/InitialInfo';
import InitialQuestion from './components/Questions/InitialQuestion';
import MSMQuestions from './components/Questions/MSMQuestions';
import AddInfo from './components/Questions/AddInfo';
import Questions from './components/Questions/Questions';
import EditOptions from './components/Edit/EditOptions';
import UpdateMedicalInfo from './components/Edit/UpdateMedicalInfo';
// import { ClipLoader } from 'react-spinners';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Login/>}/> */}
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/PatientInfo/:id" element={<PatientInfo/>}/>
          <Route exact path="/EditPersonalInfo/:id" element={<EditPersonalInfo/>}/>
          <Route exact path="/InitialInfo" element={<InitialInfo/>}/>
          <Route exact path="/InitialQuestion" element={<InitialQuestion/>}/>
          <Route exact path="/MSMQuestions" element={<MSMQuestions/>}/>
          <Route exact path="/Questions" element={<Questions/>}/>
          <Route exact path="/AddInfo" element={<AddInfo/>}/>
          <Route exact path="/EditOptions/:id" element={<EditOptions/>}/>
          <Route exact path="/UpdateMedicalInfo/:id" element={<UpdateMedicalInfo/>}/>
          
        </Routes>
        </BrowserRouter>

    
  );
}

export default App;
    