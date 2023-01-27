import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {useState, useEffect} from 'react';
import Homepage from  './components/Homepage';
import PatientInfo from './components/PatientInfo';
import EditPersonalInfo from './components/Edit/EditPersonalInfo';
import AddContactInfo from './components/Questions/AddContactInfo';
import Questions from './components/Questions/Questions';
import EditOptions from './components/Edit/EditOptions';
import UpdateMedicalInfo from './components/Edit/UpdateMedicalInfo';
import FirstQuestion from './components/Questions/MSMQuestions/FirstQuestion';
import SecondQuestion from './components/Questions/MSMQuestions/SecondQuestion';
import ThirdQuestion from './components/Questions/MSMQuestions/ThirdQuestion';
import FourthQuestion from './components/Questions/MSMQuestions/FourthQuestion';
import Administration from './components/Admin/Administration';
import Dashboard from './components/Admin/Dashboard';
// import { ClipLoader } from 'react-spinners';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/PatientInfo/:id" element={<PatientInfo/>}/>
          <Route exact path="/EditPersonalInfo/:id" element={<EditPersonalInfo/>}/>
          <Route exact path="/AddContactInfo" element={<AddContactInfo/>}/>
          <Route exact path="/Questions" element={<Questions/>}/>
          <Route exact path="/EditOptions/:id" element={<EditOptions/>}/>
          <Route exact path="/UpdateMedicalInfo/:id" element={<UpdateMedicalInfo/>}/>
          <Route exact path="/FirstQuestion" element={<FirstQuestion/>}/>
          <Route exact path="/SecondQuestion" element={<SecondQuestion/>}/>
          <Route exact path="/ThirdQuestion" element={<ThirdQuestion/>}/>
          <Route exact path="/FourthQuestion" element={<FourthQuestion/>}/>
          <Route exact path="Administration" element={<Administration/>}/>
          <Route exact path="Dashboard" element={<Dashboard/>}/>

          
        </Routes>
        </BrowserRouter>

    
  );
}

export default App;
    