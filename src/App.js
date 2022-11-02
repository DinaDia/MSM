
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
function App() {
  return (   
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
    