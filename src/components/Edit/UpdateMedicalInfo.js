import Header from '../Header';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DataCollection from '../../DataCollection';




const UpdateMedicalInfo = () => {
    const {data: patient, error}=DataCollection('http://localhost:8000/patients');
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
  return (
    <div>
        {
            error && 
            <div className="errorMessageStyle">
              Error has occurred, please try again
            </div>
        }    

        {
            <div>
            <Header/>
            <div>
                <h2 className='headingTag'>Update patient information</h2>
     
                <form className='formStyle' onSubmit={handleSubmit}>
                  <label>MSM score</label>
                  <input className='infoInputStyle' type="text"
                  min="1" max="15"/>

                </form>
            </div>
            </div>
     
            
        }    
    </div>
  )
}

export default UpdateMedicalInfo