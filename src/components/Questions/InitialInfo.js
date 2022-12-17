import Header from '../Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataCollection from '../../DataCollection';


const InitialInfo = ({onSubmit}) => {

    const {error}=DataCollection('http://localhost:8000/patients');
    
    const [Name, setName]=useState('');
    const [DOB, setDOB]=useState('');
    const [Gender, setGender]=useState('');
    const [Phone, setPhone]=useState('');
    const [martialStatus, setMartialStatus]=useState('');
    const [childrenNo, setChildrenNo]=useState('');
    const [yearsOfEducation, setYearsOfEducation]=useState('');
    const [professionalStatus, setProfessionalStatus]=useState('');
    const [paidMonth, setPaidMonth]=useState('');

    
    const navigate=useNavigate();


    const handleSubmit=(e)=>{
      e.preventDefault();
      onSubmit(Name, DOB, Gender, Phone);
      
  }

    

  return  (
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
           <h2 className='headingTag'>New patient</h2>

           <form className='formStyle' onSubmit={handleSubmit}>
             <label>Full Name</label>
             <input className='infoInputStyle' type="text"
             placeholder='Full Name'
             required
             value={Name}
             onChange={(e)=>setName(e.target.value)}  />

             <label>Age</label>
             <input className='infoInputStyle' type="date"
             placeholder="dd/mm/yyyy" 
             required
             value={DOB}
             onChange={(e)=>setDOB(e.target.value)}  />
             
             <label>Gender</label>
             <select className='selectStyle' type="text"
             placeholder='Gender'
             required
             value={Gender}
             onChange={(e)=>setGender(e.target.value)}>
               
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
             <select className='selectStyle' type="text"
             required
             value={martialStatus}
             onChange={(e)=>setMartialStatus(e.target.value)}>
               
               <option hidden>Select Martial Status</option>
               <option value="Married">Married</option>
               <option value="Cohabiting">Cohabiting</option>
               <option value="Separated">Separated</option>
               <option value="Divorced">Divorced</option>
               <option value="Widowed">Widowed</option>
               <option value="Never Married and not cohabiting">Never Married and not cohabiting</option>

             </select>

             
            <label>Number of children born alive</label>
             <input className='infoInputStyle' type="text"
             placeholder='Children Number'
             required
             value={childrenNo}
             onChange={(e)=>setChildrenNo(e.target.value)}  />  

             
            <label>Years of formal education</label>
             <input className='infoInputStyle' type="text"
             placeholder='Years of formal education'
             required
             value={yearsOfEducation}
             onChange={(e)=>setYearsOfEducation(e.target.value)}  />
             
             
             
             <label>Professional Status</label>
             <select className='selectStyle' type="text"
             required
             value={professionalStatus}
             onChange={(e)=>setProfessionalStatus(e.target.value)}>
               
               <option hidden>Select Professional Status</option>
               <option value="Full time">Full time</option>
               <option value="Part Time">Part Time</option>
               <option value="Household duties">Household duties</option>
               <option value="Unemployed">Unemployed</option>
               <option value="Retired">Retired</option>
               <option value="Sheltered work">Sheltered work</option>
               <option value="Primarily A student">Primarily A student</option>

             </select>


             
            <label>Number of months paid employment in the past year</label>
             <input className='infoInputStyle' type="text"
             required
             value={paidMonth}
             onChange={(e)=>setPaidMonth(e.target.value)}  />

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
export default InitialInfo