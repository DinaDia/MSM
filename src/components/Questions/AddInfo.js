import { useState } from 'react';
import DataCollection from '../../DataCollection';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const AddInfo = ({finalSubmit}) => {

  const [medNo, setMedNo]=useState('');
  const [med, setMed]=useState();
  const [currentMed, setCurrentMed]=useState();

  
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
    finalSubmit(medNo, med,currentMed)
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

              <label>Number of medications taken</label>
              <input className='infoInputStyle' type="text"
             placeholder='Number of medications'
             required
             value={medNo}
             onChange={(e)=>setMedNo(e.target.value)}  />

             <label>Medicines taken previously</label>
             <select className='multiSelectStyle'
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
             
             <label>Currently prescribed medication</label>
             <select className='multiSelectStyle'
              placeholder="select Medicines"
              value={currentMed}
              onChange={(e)=>setCurrentMed(e.target.value)}
              >
                <option hidden>Select Medication</option>
                <option value="Med1">Med1</option>
                <option value="Med2">Med2</option>
                <option value="Med3">Med3</option>
                <option value="Med4">Med4</option>

             </select>

             <p>N.B. All of the medications listed here should be taken for 
              adequate amount of time and dose respective to the medicine type</p>
             <div className='smallerBoxButtonsDiv'>
              <button className='backButtons'
               onClick={()=>navigate('/')}>
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