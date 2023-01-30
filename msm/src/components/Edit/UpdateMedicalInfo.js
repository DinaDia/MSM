import Header from '../Header';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';



const UpdateMedicalInfo = () => {

  const {id}=useParams();  

  const [Name, setName]=useState('');
  const [birthDate, setBirthDate]=useState('');
  const [Gender, setGender]=useState('');
  const [Phone, setPhone]=useState('');
  const [martialStatus, setMartialStatus]=useState('');
  const [childrenNo, setChildrenNo]=useState('');
  const [professionalStatus, setProfessionalStatus]=useState('');
  const [currentTime, setCurrentTime]=useState('');
  const [MSM, setMSM]=useState('');
  const [Duration, setDuration]=useState('');
  const [symptom, setSymptom]=useState('');
  const [treatment, setTreatment]=useState('');
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
  const [medDuration, setMedDuration]=useState([]);
  const [countedMed, setCountedMed]=useState([]);
  const [responseOfMed, setResponseOfMed]=useState([]);
  const navigate=useNavigate();


  const [dateOfCheckup, setDateOfCheckup]=useState([]);
  const [checkupDuration, setCheckupDuration]=useState([]);
  const [checkupSymptom, setCheckupSymptom]=useState([]);
  

  useEffect(()=>{
    fetch('http://localhost:8000/patients/'+id).then((res)=>{
      return res.json();
    }).then((resp)=>{
      setName(resp.Name);
      setBirthDate(resp.birthDate);
      setGender(resp.Gender);
      setPhone(resp.Phone);
      setMartialStatus(resp.martialStatus);
      setChildrenNo(resp.childrenNo);
      setProfessionalStatus(resp.professionalStatus);
      setCurrentTime(resp.currentTime);
      setMSM(resp.MSM);
      setDuration(resp.Duration);
      setSymptom(resp.symptom);
      setTreatment(resp.treatment);
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
      setMedDuration(resp.medDuration);
      setCountedMed(resp.medDuration);
      setResponse(resp.responseOfMed);
      setDateOfCheckup(resp.dateOfCheckup);
      setCheckupDuration(resp.checkupDuration);
      setCheckupSymptom(resp.checkupSymptom);
      
      
    }).catch((err)=>{
      console.log(err.message)
    })
    
// eslint-disable-next-line
  }, [])



  const handleSubmit=(e)=>{
    e.preventDefault();

    const DetailedInfo={Name, birthDate, Gender,Phone, martialStatus, childrenNo, professionalStatus,
      MSM, Duration,symptom, treatment, level, aug, ect, treatmentSection, treatmentClass, medication,
      tolerability, adherence, response, dosage, medDuration, countedMed, responseOfMed, dateOfCheckup, 
      checkupDuration, checkupSymptom
    }

    fetch('http://localhost:8000/patients/' + id, {
    method: 'PUT',
    headers: { 
      "Accept":"application/json",
      "Content-Type": "application/json" },
    body: JSON.stringify(DetailedInfo)
    }).then(() => {
      navigate('/Homepage')
     })
    
}


  return (
    <div>
       <Header/>
           <h2 className='headingTag'>Update medical information</h2>

           <form className='formStyle' onSubmit={handleSubmit}>
             <label>Date of checkup</label>
             <input className='dateStyle' type="date"
             placeholder='dd/mm/yyyy'
             
             value={dateOfCheckup}
             onChange={(e)=>setDateOfCheckup(e.target.value)}  />

             <label>Duration</label>
             <select className='multiSelectStyle'
             
             placeholder="Select Duration"
             value={checkupDuration} 
             onChange={(e)=>setCheckupDuration(e.target.value)}
             >
                  <option hidden>Select Duration</option>
                  <option value="Less than a year">Less than a year</option>
                  <option value="Between a year and two">Between a year and two</option>
                  <option value="More than two years">More than two years</option>

             </select>
             

             <label>Symptom</label>
             <select className='multiSelectStyle'
             
             placeholder="Select Symptom"
             value={checkupSymptom} 
             onChange={(e)=>setCheckupSymptom(e.target.value)}
             >
                  <option hidden>Select Symptom</option>
                  <option value="Subsyndromal">Subsyndromal</option>
                  <option value="Mild">Mild</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Severe without psychosis">Severe without psychosis</option>
                  <option value="Severe with psychosis">Severe with psychosis</option>

             </select>

             <div className='smallerBoxButtonsDiv'>
               <button className='backButtons'
               onClick={()=>navigate('/Homepage')}>
                   Cancel</button>
               <button className='rightButtons'>
                   Next</button>
             </div>

           </form>

       
  
     
    </div> 
  )
}

export default UpdateMedicalInfo