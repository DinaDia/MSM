
import { useState } from 'react';
import InitialInfo from './InitialInfo';
import MSMQuestions from './MSMQuestions';
import AddInfo from './AddInfo';
import { useNavigate } from 'react-router-dom';


const Questions =()  => {

    const [Name, setName]=useState('');
    const [Age, setAge]=useState('');
    const [Gender, setGender]=useState('');
    const [Phone, setPhone]=useState('');
    const [martialStatus, setMartialStatus]=useState('');
    const [childrenNo, setChildrenNo]=useState('');
    const [professionalStatus, setProfessionalStatus]=useState('');
    const [MSM, setMSM]=useState('');
    const [Duration, setDuration]=useState('');
    const [Severity, setSeverity]=useState('');
    const [TRD, setTRD]=useState('');
    const [Level, setLevel]=useState('');
    const [aug, setAug]=useState('');
    const [ect, setEct]=useState('');
    const [med, setMed]=useState('');
    const [medNo, setMedNo]=useState('');

    
    const navigate=useNavigate();

    const [order, setOrder]=useState(0);
    
  const orderChanges=()=>{
    if(order===0){
      return <InitialInfo onSubmit={getData}/>;      
    }
    else if(order ===1){
      return <MSMQuestions secondSubmit={getMSM}/>
    }
    else if(order ===2){
      return <AddInfo finalSubmit={getMed}/>
    }

  }
  
  const getData=(Name, DOB, Gender, Phone, martialStatus, childrenNo, professionalStatus)=>{
    setName(Name);    
    setAge(20);
    setGender(Gender);
    setPhone(Phone);
    setMartialStatus(martialStatus);
    setChildrenNo(childrenNo);
    setProfessionalStatus(professionalStatus);

    setOrder(1);
                
  }
  const getMSM=(MSM, Duration, Severity, TRD, Level, aug, ect)=>{
    setMSM(MSM);
    setDuration(Duration);
    setSeverity(Severity);
    setTRD(TRD);
    setLevel(Level);
    setAug(aug);
    setEct(ect);

    setOrder(2);
    
  }


  const getMed=(med, medNo)=>{
    setMed(med);
    setMedNo(medNo);


    const Patient={ Name, Age, Gender, martialStatus, childrenNo, professionalStatus,
       Phone, MSM, Duration,Severity, TRD, Level, aug, ect, med, medNo};
    fetch('http://localhost:8000/patients', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Patient)
    }).then(() => {
    navigate('/')
     })
  }
  return (
    <div>
      
      {orderChanges(order)}
      
      
    </div>
  )
}

export default Questions