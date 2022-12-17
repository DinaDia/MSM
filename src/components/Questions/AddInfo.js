import { useState } from 'react';
import DataCollection from '../../DataCollection'
import Header from '../Header'

const AddInfo = ({thirdSubmit}) => {

  const [medNo, setMedNo]=useState('');
  const [medType, setMedType]=useState([]);

  const {error}=DataCollection('http://localhost:8000/patients');

  const handleSubmit=(e)=>{
    e.preventDefault();
    thirdSubmit(medNo, medType)
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
           <h2 className='headingTag'>Medication Information</h2>
            <form className='formStyle' onSubmit={handleSubmit}>
              <label>Number of medications taken at least for 4 weeks</label>
              <input className='infoInputStyle' type="text"
             placeholder='Number of medications'
             required
             value={medNo}
             onChange={(e)=>setMedNo(e.target.value)}  />

            </form>
          </div>
        </div>
      }
     
      
    </div>
  )
}

export default AddInfo