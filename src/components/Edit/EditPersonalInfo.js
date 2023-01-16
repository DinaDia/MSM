import Header from '../Header';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditPersonalInfo =  ({onSubmit}) => {
  
  const {id}=useParams();  

  const [Name, setName]=useState('');
  const [DOB, setDOB]=useState('');
  const [Gender, setGender]=useState('');
  const [Phone, setPhone]=useState('');
  const [martialStatus, setMartialStatus]=useState('');
  const [childrenNo, setChildrenNo]=useState('');
  const [professionalStatus, setProfessionalStatus]=useState('');
  const [MSM, setMSM]=useState('');
  const [firstAnswer, setFirstAnswer]=useState('');
  const [secondAnswer, setSecondAnswer]=useState('');
  const [thirdAnswer, setThirdAnswer]=useState('');
  const [treatmentSection, setTreatmentSection]=useState([]);
  const [treatmentClass, setTreatmentClass]=useState([]);
  const [medication, setMedication]=useState([]);
  const [tolerability, setTolerability]=useState([]);
  const [adherence, setAdherence]=useState([]);
  const [response, setResponse]=useState([]);
  const [dosage, setDosage]=useState([]);
  const [level, setLevel]=useState('');
  const [aug, setAug]=useState('');
  const [ect, setEct]=useState('');  
  const navigate=useNavigate();


  useEffect(()=>{
    fetch('http://localhost:8000/patients/'+id).then((res)=>{
      return res.json();
    }).then((resp)=>{
      setName(resp.Name);
      setDOB(resp.DOB);
      setGender(resp.Gender);
      setPhone(resp.Phone);
      setMartialStatus(resp.martialStatus);
      setChildrenNo(resp.childrenNo);
      setProfessionalStatus(resp.professionalStatus);
      setMSM(resp.MSM);
      setFirstAnswer(resp.firstAnswer);
      setSecondAnswer(resp.secondAnswer);
      setThirdAnswer(resp.thirdAnswer);
      setTreatmentSection(resp.treatmentSection);
      setTreatmentClass(resp.treatmentClass);
      setMedication(resp.medication);
      setTolerability(resp.tolerability);
      setAdherence(resp.adherence);
      setResponse(resp.response);
      setDosage(resp.dosage);
      setLevel(resp.level);
      setAug(resp.aug);
      setEct(resp.ect);
    }).catch((err)=>{
      console.log(err.message)
    })
    
// eslint-disable-next-line
  }, [])

  

  const handleSubmit=(e)=>{
    e.preventDefault();

    const DetailedInfo={Name, DOB, Gender,Phone, martialStatus, childrenNo, professionalStatus,
      MSM, firstAnswer,secondAnswer, thirdAnswer, level, aug, ect, treatmentSection, treatmentClass, medication,
      tolerability, adherence, response, dosage
    }
    fetch('http://localhost:8000/patients/' + id, {
    method: 'PUT',
    headers: { 
      "Accept":"application/json",
      "Content-Type": "application/json" },
    body: JSON.stringify(DetailedInfo)
    }).then(() => {
      navigate('/')
     })
    
}
 
    



return (
<div>
   <Header/>
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
               Save</button>
         </div>

       </form>
 
 
</div>
)
}

export default EditPersonalInfo