
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {useState, useEffect} from 'react';
// import Login from './components/Login';
import Homepage from  './components/Homepage';
import PatientInfo from './components/PatientInfo';
import EditInfo from './components/EditInfo';
import InitialInfo from './components/InitialInfo';
import InitialQuestion from './components/InitialQuestion';
import FirstQuestion from './components/MSMQuestions.js/FirstQuestion';
import SecondQuestion from './components/MSMQuestions.js/SecondQuestion';
import ThirdQuestion from './components/MSMQuestions.js/ThirdQuestion';
import FourthQuestion from './components/MSMQuestions.js/FourthQuestion';
import FifthQuestion from './components/MSMQuestions.js/FifthQuestion';
import SixthQuestion from './components/MSMQuestions.js/SixthQuestion';
import SeventhQuestion from './components/MSMQuestions.js/SeventhQuestion';
import Result from './components/Result';
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
          <Route exact path="/FirstQuestion" element={<FirstQuestion/>}/>
          <Route exact path="/SecondQuestion" element={<SecondQuestion/>}/>
          <Route exact path="/ThirdQuestion" element={<ThirdQuestion/>}/>
          <Route exact path="/FourthQuestion" element={<FourthQuestion/>}/>
          <Route exact path="/FifthQuestion" element={<FifthQuestion/>}/>
          <Route exact path="/SixthQuestion" element={<SixthQuestion/>}/>
          <Route exact path="/SeventhQuestion" element={<SeventhQuestion/>}/>
          <Route exact path="/Result" element={<Result/>}/>



        </Routes>
        </BrowserRouter>

    
  );
}

export default App;
    