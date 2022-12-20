import { useState } from "react";
import AddContactInfo from "./AddContactInfo";
import FirstQuestion from "./MSMQuestions/FirstQuestion";
import FourthQuestion from "./MSMQuestions/FourthQuestion";
import SecondQuestion from "./MSMQuestions/SecondQuestion";
import ThirdQuestion from "./MSMQuestions/ThirdQuestion";

const Questions = () => {

  const [Name, setName]=useState('');
  const [DOB, setDOB]=useState('');
  const [Gender, setGender]=useState('');
  const [Phone, setPhone]=useState('');
  const [martialStatus, setMartialStatus]=useState('');
  const [childrenNo, setChildrenNo]=useState('');
  const [professionalStatus, setProfessionalStatus]=useState('');


  const [firstValue, setFirstValue]=useState('');
  const [firstAnswer, setFirstAnswer]=useState('');
  const [firstId, setFirstId]=useState('');

  const [secondAnswer, setSecondAnswer]=useState('')
  const [secondValue, setSecondValue]=useState('');
  const [secondId, setSecondId]=useState('');


  const [thirdValue, setThirdValue]=useState('');
  const [thirdAnswer, setThirdAnswer]=useState('');
  const [thirdId, setThirdId]=useState('');  
  
  const [medNo, setMedNo]=useState('');
  const [med, setMed]=useState();
  const [currentMed, setCurrentMed]=useState();
  
  const [order, setOrder]=useState(0);
    
  const orderChanges=()=>{
    if(order===0){
      return <AddContactInfo onSubmit={getContactInfo} />
    }
    else if(order===1){
      return <FirstQuestion firstSubmit={getFirstData} firstBack={firstBack}/>  
    }
    else if(order===2){
      return <SecondQuestion secondSubmit={getSecondData} secondBack={secondBack}/>
    }
    else if(order===3){
      return <ThirdQuestion thirdSubmit={getThirdData} thirdBack={thirdBack}/>
    }
    else if(order===4){
      return <FourthQuestion fourthSubmit={getFourthData} fourthBack={fourthBack}/>
    }

  }

  const getContactInfo=(Name, DOB, Gender, Phone, martialStatus, childrenNo, professionalStatus)=>{
    
    setName(Name);    
    setDOB(DOB);
    setGender(Gender);
    setPhone(Phone);
    setMartialStatus(martialStatus);
    setChildrenNo(childrenNo);
    setProfessionalStatus(professionalStatus);

    setOrder(1);
  }
  
  const getFirstData=(firstAnswer, firstId, firstValue)=>{
    
    setFirstAnswer(firstAnswer);
    setFirstId(firstId);
    setFirstValue(firstValue);

    setOrder(2);
            
  };

  const getSecondData=(secondAnswer, secondId, secondValue)=>{
    setSecondAnswer(secondAnswer);
    setSecondValue(secondValue);
    setSecondId(secondId);

    setOrder(3);
  }

  const getThirdData=(thirdAnswer, thirdId, thirdValue)=>{
    setThirdAnswer(thirdAnswer);
    setThirdValue(thirdValue);
    setThirdId(thirdId);

    setOrder(4);
  }

  const getFourthData=(medNo, med, currentMed)=>{
    setMedNo(medNo);
    setMed(med);
    setCurrentMed(currentMed);

    setOrder(5);
  };

  
  const firstBack=()=>{
    setOrder(0);
  };
  const secondBack=()=>{
    setOrder(1);
  };
  const thirdBack=()=>{
    setOrder(2);
  }
  const fourthBack=()=>{
    setOrder(3);
  };


  return (
    <div>
      {orderChanges(order)}
      
    </div>
  )
}

export default Questions