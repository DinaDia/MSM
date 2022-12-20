import Header from '../Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataCollection from '../../DataCollection';




const UpdateMedicalInfo = () => {

    const [medNo, setMedNo]=useState('');
    const [med, setMed]=useState();

    const { error}=DataCollection('http://localhost:8000/patients');


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
                <h2 className='headingTag'>Update patient record</h2>
     
                <form className='formStyle' onSubmit={handleSubmit}>
                  <label>Number of medications taken at least for 4 weeks</label>
                  <input className='infoInputStyle' type="text"
                  placeholder='Number of medications'
                  required
                  value={medNo}
                  onChange={(e)=>setMedNo(e.target.value)}  />
                  
                  <label>Medicines taken</label>
                  <select className='multiSelectStyle'
                  isMulti
                  required
                  placeholder="select Medicines"
                  value={med}
                  onChange={(e)=>setMed(e.target.value)}
                  >
                    <option hidden>Select Medication</option>
                    <option value="Med1">Med1</option>
                    <option value="Med2">Med2</option>
                    <option value="Med3">Med3</option>
                    <option value="Med4">Med4</option>
                    
                  </select>
                  
                <div className='smallerBoxButtonsDiv'>
                  <button className='backButtons'
                  onClick={()=>navigate('/')}>
                    Cancel</button>
                    <button className='rightButtons'>
                      Save</button></div>

                </form>
            </div>
            </div>
     
            
        }    
    </div>
  )
}

export default UpdateMedicalInfo