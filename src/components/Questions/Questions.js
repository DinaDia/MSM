import { useState } from "react";
import AddContactInfo from "./AddContactInfo";
import Confirmation from "./Confirmation";
import FirstQuestion from "./MSMQuestions/FirstQuestion";
import FourthQuestion from "./MSMQuestions/FourthQuestion";
import Result from "../Result";
import SecondQuestion from "./MSMQuestions/SecondQuestion";
import ThirdQuestion from "./MSMQuestions/ThirdQuestion";
import { useNavigate } from "react-router-dom";

const Questions = () => {


  const navigate=useNavigate();
  const [Name, setName]=useState('');
  const [DOB, setDOB]=useState('');
  const [Gender, setGender]=useState('');
  const [Phone, setPhone]=useState('');
  const [martialStatus, setMartialStatus]=useState('');
  const [childrenNo, setChildrenNo]=useState('');
  const [professionalStatus, setProfessionalStatus]=useState('');

  const [firstValue, setFirstValue]=useState('');
  const [Duration, setDuration]=useState('');

  const [symptom, setSymptom]=useState('')
  const [secondValue, setSecondValue]=useState('');

  const [treatment, setTreatment]=useState('');
  const [thirdId, setThirdId]=useState(''); 
  
  const [treatmentSection, setTreatmentSection]=useState([]);
  const [treatmentClass, setTreatmentClass]=useState([]);
  const [medication, setMedication]=useState([]);
  const [tolerability, setTolerability]=useState([]);
  const [adherence, setAdherence]=useState([]);
  const [response, setResponse]=useState([]);
  const [dosage, setDosage]=useState([]);
  const [medDuration, setMedDuration]=useState([]);
  const [countedMed, setCountedMed]=useState([]);
  const [responseOfMed, setResponseOfMed]=useState([]);


  const [order, setOrder]=useState(0);
  const [fourthValue, setFourthValue]=useState(0);
  const [augCount, setAugCount]=useState(0);
  const [aug, setAug]=useState('No');
  const [ect, setEct]=useState('No');
  const [level, setLevel]=useState('');
  const [ectCount, setEctCount]=useState(0);
  const [MSM, setMSM]=useState(0);


    
  const orderChanges=()=>{
    if(order===4){
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
    else if(order===0){
      return <FourthQuestion fourthSubmit={getFourthData} fourthBack={fourthBack} addMore={addTreatment}/>
    }
    else if(order===5){
      return <Confirmation confirmSubmit={showResult} startAgain={StartOver}/>
    }
    else if(order===6){
      return <Result  finalSubmit={complete}Duration={Duration} firstValue={firstValue} symptom={symptom} secondValue={secondValue}
      treatment={treatment} treatmentSection={treatmentSection} fourthValue={fourthValue} augCount={augCount} ectCount={ectCount} aug={aug} ect={ect}
     tolerability= {tolerability}
      treatmentClass={treatmentClass} medication={medication} medDuration={medDuration} adherence={adherence} response={response} countedMed={countedMed}
      responseOfMed={responseOfMed}/>
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
  
  const getFirstData=(firstAnswer, firstValue)=>{
    
    setDuration(firstAnswer);
    setFirstValue(firstValue);

    setOrder(2);
            
  };

  const getSecondData=(secondAnswer, secondValue)=>{
    setSymptom(secondAnswer);
    setSecondValue(secondValue);
    setOrder(3);
  }

  const getThirdData=(thirdAnswer, thirdId)=>{
    setTreatment(thirdAnswer);
    setThirdId(thirdId);
    if(thirdId === 100){
      setOrder(6);
    }
    else {
      setOrder(4);
    }

  };


  const addTreatment=(selectedSection, selectedClass, selectedMed, currentTolerability, 
    currentAdherence, currentResponse, currentDosage, currentDuration)=>{


    setTreatmentSection([...treatmentSection, selectedSection]);
    setTreatmentClass([...treatmentClass, selectedClass]);
    setMedication([...medication, selectedMed]);
    setTolerability([...tolerability, currentTolerability]);
    setAdherence([...adherence, currentAdherence]);
    setResponse([...response, currentResponse]);
    setDosage([...dosage, currentDosage]);
    setMedDuration([...medDuration, currentDuration]);

    if(selectedSection === 'RECOGNISED ANTIDEPRESSANTS'){
      if (currentAdherence === '>75%' && currentResponse !== '>75%' && currentDuration === 'Yes')
      {
        setCountedMed([...countedMed, selectedMed]);
        setResponseOfMed([...responseOfMed, currentResponse])
      }
    }
   
  };

  const getFourthData=(selectedSection, selectedClass, selectedMed, currentTolerability, 
    currentAdherence, currentResponse, currentDosage, currentDuration, trdMed)=>{
    
    setTreatmentSection([...treatmentSection, selectedSection]);
    setTreatmentClass([...treatmentClass, selectedClass]);
    setMedication([...medication, selectedMed]);
    setTolerability([...tolerability, currentTolerability]);
    setAdherence([...adherence, currentAdherence]);
    setResponse([...response, currentResponse]);
    setDosage([...dosage, currentDosage]);
    setMedDuration([...medDuration, currentDuration]);
    setCountedMed([...countedMed, trdMed]);

    if(selectedSection === 'RECOGNISED ANTIDEPRESSANTS'){
      if (currentAdherence === '>75%' && currentResponse !== '>75%' && currentDuration === 'Yes')
      {
        setCountedMed([...countedMed, selectedMed]);
        setResponseOfMed([...responseOfMed, currentResponse])
      }
    }

    
    setOrder(5);
  };

  const showResult=()=>{


    console.log(treatmentSection.includes('RECOGNISED AUGMENTATION THERAPIES'))
    
    if(treatmentSection.includes('RECOGNISED AUGMENTATION THERAPIES')){
      setAugCount(1);
      setAug('Yes');
    }

    if(medication.includes('ECT')){
      setEctCount(1);
      setEct('Yes')
    }
   

      setOrder(6);
  };


  const complete=(MSM)=>{

    setMSM(MSM);
    const currentTime=new Date();    
    const Patient={ Name, DOB, Gender, Phone, martialStatus, childrenNo, professionalStatus,
      currentTime, Duration, symptom, treatment, treatmentSection, treatmentClass, medication, 
      tolerability, adherence, response, dosage, MSM, aug, ect, level, medDuration, countedMed, responseOfMed
    };
          fetch('http://localhost:8000/patients', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Patient)
          })
          .then(
            navigate('/')
          )

  }






  
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

  const StartOver=()=>{
    setOrder(0);
  }


  return (
    <div>
      {orderChanges(order)}
      
    </div>
  )
}

export default Questions