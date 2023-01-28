import React from 'react';
import { useParams } from 'react-router-dom';
import DataCollection from '../DataCollection';
import Header from './Header';
import { useNavigate } from 'react-router-dom';


const PatientInfo = () => {
  const {id}=useParams();
  const {data:patient, error}=DataCollection('http://localhost:8000/patients/'+id);
  const navigate=useNavigate();

  
  

  const handleClick=(id)=>{
    if(window.confirm("Confirm you want to delete this entry")){
    
    fetch(`http://localhost:8000/patients/` + patient.id, {

      method: 'DELETE'
    }).then(() => {
      navigate('/');
    })   
  }


  // const registeredDate=patient.currentTime.getFull


}




  return (
    <div>
      {error && 
        <div className="errorMessageStyle">
          Error has occurred, please try again
        </div>
      }
      {
        patient && (
           <div>
            <Header/>
            <h2 className='headingTag'>Patient record</h2>
      
          <article className='patientInfo'>
          <p className='patientInfoTextStyle'>Personal information</p>
          <p>Full name:
            <span className='patientInfoText'>
               {patient.Name} 
            </span>
          </p>
          <p>Date of birth: 
            <span className='patientInfoText'>
              {patient.DOB} 
            </span>
          </p>
          {/* <p>Age: 
            <span className='patientInfoText'>
              {}
            </span>
          </p> */}
          <p>Gender: 
            <span className='patientInfoText'>
              {patient.Gender}
            </span>
          </p>
          <p>Martial status: 
            <span className='patientInfoText'>
              {patient.martialStatus}
            </span>
          </p>
          <p>Number of children: 
            <span className='patientInfoText'>
              {patient.childrenNo}
            </span>
          </p>
          <p>professional status: 
            <span className='patientInfoText'>
              {patient.professionalStatus}
            </span>
          </p>
          
          <div className='patientInfoDiv'>
            <div>
              <p className='patientInfoTextStyle'>Baseline</p>
              <p className='dateTextStyle'>{Date(patient.currentTime).slice(4,16)}</p>
            </div>
            <div className='individualPatientInfo'>  
            <p>Duration of depressive episode: 
              <span className='patientInfoText'>
                {patient.Duration}
              </span>
            </p>
            <p>Symptom severity: 
              <span className='patientInfoText'>
                {patient.symptom}
              </span>
            </p>
            <p>Treatment resistance: 
              <span className='patientInfoText'>
                {patient.treatment}
              </span>
            </p>
            <p>Treatment failure level: 
              <span className='patientInfoText'>
                {patient.level}
              </span>
            </p>
            <p>Total number of medicines taken: 
              <span className='patientInfoText'>
                {patient.medication.length}
              </span>
            </p>
            
            <p>Number of medication with resistance: 
              <span className='patientInfoText'>
                {patient.medication.length}
              </span>
            </p>

            <div>List of medication taken: 
              {patient.medication.map((med, i)=>{
                return(
                  <div key={i}>
                        <p style={{paddingBottom:"5px", paddingTop:"5px"}}>&#x2022; Medication {i+1}</p>
                    <div style={{padding: "0px 25px 5px 25px"}}>
                        <p>Treatment section: <span className='patientInfoText'> {patient.treatmentSection[i]} </span> </p>
                        <p>Treatment class: <span className='patientInfoText'> {patient.treatmentClass[i]} </span> </p>
                        <p>Medication name:<span className='patientInfoText'> {med} </span> </p>
                        <p>Tolerability:<span className='patientInfoText'>{patient.tolerability[i].toLowerCase()} </span> </p>
                        <p>Adherence:<span className='patientInfoText'>{patient.adherence[i]} </span> </p>
                        <p>Response:<span className='patientInfoText'>{patient.response[i]} </span> </p>      
                        <p>Dosage:<span className='patientInfoText'>{patient.dosage[i]} </span> </p>    
                        <p>Has been taken the effective minimum dosage for at least for 4 weeks :<span className='patientInfoText'>{patient.medDuration[i]} </span> </p>      


                    </div>
                    
                  </div>
                )
              })}
            </div>
            
            <p>Augmentation: 
              <span className='patientInfoText'>
                {patient.aug} </span>
            </p>
            <p>ECT:
              <span className='patientInfoText'>
                {patient.ect}</span>
            </p>
          </div>
          
          
            
          </div>
          <div className='smallerBoxButtonsDiv'>
              <button className="deleteButton"
              onClick={handleClick}>
                Delete</button>
                

              <button className='rightButtons'
              onClick={()=>navigate(`/EditOptions/${patient.id}`)}>
                Edit options</button>
          </div>
        </article>
        
        </div>
        )
        }
        
    </div>
  )
}

export default PatientInfo