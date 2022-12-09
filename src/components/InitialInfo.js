import React from 'react'
import Header from './Header'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const InitialInfo = () => {

    const [name, setName]=useState('');
    const [age, setAge]=useState('');
    const [gender, setGender]=useState('');
    const [phone, setPhone]=useState('');
    const navigate=useNavigate();
  return (
    <div>
        <Header/>
        <div>
            <h2 className='headingTag'>New patient</h2>

            <form className='formStyle'>
              <label>Full name</label>
              <input className='infoInputStyle' type="text"
              required
              value={name}
              onChange={(e)=>setName(e.target.value)}  />

              <label>Age</label>
              <input className='infoInputStyle' type="text"
              required
              value={age}
              onChange={(e)=>setAge(e.target.value)}  />
              
              <label>Gender</label>
              <select className='selectStyle' type="text"
              required
              value={gender}
              onChange={(e)=>setGender(e.target.value)}>
                
                <option hidden>Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>

              
              <label>Phone Number</label>
              <input className='infoInputStyle' type="tel"
              required
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}  />


              <div className='smallerBoxButtonsDiv'>
                <button className='backButtons'
                onClick={()=>navigate('/')}>
                    Go back</button>
                <button className='rightButtons'>
                    <Link className='linkStyle' to={'/InitialQuestion'}>Next</Link></button>
              </div>

            </form>
        </div>
    </div>
  )
}

export default InitialInfo