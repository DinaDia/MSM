import React from 'react';
import { useParams } from 'react-router-dom';
import DataCollection from '../DataCollection';
import Header from './Header';

const PatientInfo = () => {
  const {id}=useParams();
  const {data:patient, error}=DataCollection('http://localhost:8000/patients/'+id);
  return (
    <div>
      <div>
      {error && 
        <div className="errorMessageStyle">
          Error has occurred, please try again
        </div>
      }
      </div>
      <Header/>
      <h2 className='headingTag'>Patient record</h2>
      {
        patient && (
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

          <br/>
          <div className='patientInfoButtons'>
              <button className='backButtons'>Go back</button>
              <button className='rightButtons'>Edit</button>
          </div>
        </article>
        )
        }
        
        
    </div>
  )
}

export default PatientInfo