
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Homepage from  './components/Homepage';
function App() {
  return (   
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/Homepage" element={<Homepage/>}/>

    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
    