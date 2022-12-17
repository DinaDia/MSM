import { useState } from 'react';
import DataCollection from '../../DataCollection';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const AddInfo = ({finalSubmit}) => {

  const [medNo, setMedNo]=useState('');
  const [med, setMed]=useState();
  
  const {error}=DataCollection('http://localhost:8000/patients');

  const navigate=useNavigate();


//   const medName=[{
//     label: "Med1",
//     value: 1
//   },
//   {
//     label: "Med2",
//     value:2
//   },
//   {
//     label: "Med3",
//     value: 3
//   },
//   {
//     label: "Med4",
//     value: 4
//   }
// ];

  const handleSubmit=(e)=>{
    e.preventDefault();
    finalSubmit(medNo, med)
  };

  // const medselection=(e)=>{
  //   const values=[...e.target.selectedOptions].map(option=>option.value);
  //   setMed(values);  
  // }
  
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
               onClick={()=>navigate('/Questions')}>
                   Cancel</button>
               <button className='rightButtons'>
                   Save</button>
             </div>
            </form>
          </div>
        </div>
      }
     
      
    </div>
  )
}

export default AddInfo