import React from 'react';
import Header from './Header';
import DataCollection from '../DataCollection';
import { useParams } from 'react-router-dom';
const PatientInfo = () => {
    const {id}=useParams();
    const {data:patient, error}=DataCollection('http://localhost:8000/patients'+id);
  return (
    <div>
        <Header/>
        <div className='patientInfo'>
            Full name:{patient.Name}
            Age: {patient.Age}
            Gender:{patient.Gender}
            Phone number:{patient.number}
            Duration:{patient.Duration}
            Symptom severity:{patient.Severity}
            Treatment resistance:{patient.TRD}
            Treatment resistance level:`Level {patient.Level} with {patient.meds} medications`
            Medications taken:{patient.meds}
            Augmentation:{patient.aug}
            ECT:{patient.ect}

            <div className='patientInfoButtons'>
                <button>Go back</button>
                <button>Edit</button>
            </div>
        </div>
    </div>
  )
}

export default PatientInfo