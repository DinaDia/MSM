import Header from '../Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataCollection from '../../DataCollection';



const EditInfo = () => {

      const {error}=DataCollection('http://localhost:8000/patients');

      
      const [Name, setName]=useState('');
      const [DOB, setDOB]=useState('');
      const [Gender, setGender]=useState('');
      const [Phone, setPhone]=useState('');
      const [martialStatus, setMartialStatus]=useState('');
      const [childrenNo, setChildrenNo]=useState('');
      const [professionalStatus, setProfessionalStatus]=useState('');

      const navigate=useNavigate();
      // const {id}=useParams();

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
           <h2 className='headingTag'>Update patient's information</h2>

           <form className='formStyle' onSubmit={handleSubmit}>
             <label>Full Name</label>
             <input className='infoInputStyle' type="text"
             placeholder='Full Name'
             required
             value={Name}
             onChange={(e)=>setName(e.target.value)}  />

             <label>Age</label>
             <input className='dateStyle' type="date"
             placeholder="dd/mm/yyyy" 
             required
             value={DOB}
             onChange={(e)=>setDOB(e.target.value)}  />
             
             <label>Gender</label>
             <select className='multiSelectStyle'
             required
             placeholder="Select Gender"
             value={Gender} 
             onChange={(e)=>setGender(e.target.value)}
             >
                  <option hidden>Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
             </select>
             
             <label>Phone Number</label>
             <input className='infoInputStyle' type="tel"
             placeholder='Phone Number'
             required
             value={Phone}
             onChange={(e)=>setPhone(e.target.value)}  />

            <label>Martial Status</label>
            <select className='multiSelectStyle'
             required
             placeholder="Select Martial status"
             value={martialStatus} 
             onChange={(e)=>setMartialStatus(e.target.value)}>
                <option hidden>Select Martial Status</option>
                <option value="Married">Married</option>
                <option value="Cohabiting">Cohabiting</option>
                <option value="Separated">Separated</option>
                <option value="Divorced">Separated</option>
                <option value="Widowed">Widowed</option>
                <option value="Never Married and not cohabiting">Never Married and not cohabiting</option>
             </select>

             
            <label>Number of children born alive</label>
             <input className='infoInputStyle' type="text"
             placeholder='Children Number'
             required
             value={childrenNo}
             onChange={(e)=>setChildrenNo(e.target.value)}  />           
             
             <label>Professional Status</label>
             <select className='multiSelectStyle'
             required
             placeholder="Select Professional status"
             value={professionalStatus} 
             onChange={(e)=>setProfessionalStatus(e.target.value)}>
                <option hidden>Select Professional Status</option>
                <option value="Full time">Full time</option>
                <option value="Part Time">Part Time</option>
                <option value="Household duties">Household duties</option>
                <option value="Retired">Retired</option>
                <option value="Sheltered work">Sheltered work</option>
                <option value="Primarily a student">Primarily a student</option>
             </select>

             <div className='smallerBoxButtonsDiv'>
               <button className='backButtons'
               onClick={()=>navigate('/')}>
                   Cancel</button>
               <button className='rightButtons'>
                   Next</button>
             </div>

           </form>
       </div>
   </div>
    }
     
   </div>
  )
}

export default EditInfo