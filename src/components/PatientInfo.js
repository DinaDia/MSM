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
          <p>Full name:&nbsp;
            <span className='patientInfoText'>
               {patient.Name} 
            </span>
          </p>
          <p>Age: 
            <span className='patientInfoText'>
              {patient.Age} 
            </span>
          </p>
          <p>Gender: 
            <span className='patientInfoText'>
              {patient.Gender}
            </span>
          </p>
          <p>Duration of depressive episode: 
            <span className='patientInfoText'>
              {patient.Duration}
            </span>
          </p>
          <p>Symptom severity: 
            <span className='patientInfoText'>
              {patient.Severity}
            </span>
          </p>
          <p>Treatment resistance: 
            <span className='patientInfoText'>
              {patient.TRD}
            </span>
          </p>
          <p>Treatment failure level: 
            <span className='patientInfoText'>
              {patient.Level}
            </span>
          </p>
          <p>Number of medication taken: 
            <span className='patientInfoText'>
              {patient.meds}
            </span>
          </p>
          <div>List of medication taken: 
            <span className='patientInfoText'>
              {patient.Age}
            </span>
          </div>
          <p>Augmentation: 
            <span className='patientInfoText'>
              {patient.aug} </span>
          </p>
          <p>ECT:
            <span className='patientInfoText'>
              {patient.ect}</span>
          </p>

          <div className='smallerBoxButtonsDiv'>
              <button className="deleteButton"
              onClick={handleClick}>
                Delete</button>
                

              <button className='rightButtons'
              onClick={()=>navigate(`/EditInfo/${patient.id}`)}>
                Edit</button>
          </div>
        </article>
        
        </div>
        )
        }
        
    </div>
  )
}

export default PatientInfo