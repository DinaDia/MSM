import Header from './Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const InitialInfo = () => {

    const [Name, setName]=useState('');
    const [Age, setAge]=useState('');
    const [Gender, setGender]=useState('');
    const [Phone, setPhone]=useState('');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault();
      const patient={Name, Age, Gender, Phone};
      
      fetch('http://localhost:8000/patients', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patient)
    }).then(() => {
      navigate('/InitialQuestion')
    })
    
  }

    

  return (
    <div>
        <Header/>
        <div>
            <h2 className='headingTag'>New patient</h2>

            <form className='formStyle' onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input className='infoInputStyle' type="text"
              required
              value={Name}
              onChange={(e)=>setName(e.target.value)}  />

              <label>Age</label>
              <input className='infoInputStyle' type="text"
              required
              value={Age}
              onChange={(e)=>setAge(e.target.value)}  />
              
              <label>Gender</label>
              <select className='selectStyle' type="text"
              required
              value={Gender}
              onChange={(e)=>setGender(e.target.value)}>
                
                <option hidden>Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>

              
              <label>Phone Number</label>
              <input className='infoInputStyle' type="tel"
              required
              value={Phone}
              onChange={(e)=>setPhone(e.target.value)}  />


              <div className='smallerBoxButtonsDiv'>
                <button className='backButtons'
                onClick={()=>navigate('/')}>
                    Go back</button>
                <button className='rightButtons'>
                    Next</button>
              </div>

            </form>
        </div>
    </div>
  )
}

export default InitialInfo