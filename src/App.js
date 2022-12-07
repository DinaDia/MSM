
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {useState, useEffect} from 'react';
// import Login from './components/Login';
import Homepage from  './components/Homepage';
import PatientInfo from './components/PatientInfo';
import EditInfo from './components/EditInfo';
// import { ClipLoader } from 'react-spinners';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Login/>}/> */}
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/PatientInfo/:id" element={<PatientInfo/>}/>
          <Route exact path="/EditInfo/:id" element={<EditInfo/>}/>

        </Routes>
        </BrowserRouter>

    
  );
}

export default App;
    