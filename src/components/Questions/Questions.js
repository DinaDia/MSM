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
  const [firstAnswer, setFirstAnswer]=useState('');

  const [secondAnswer, setSecondAnswer]=useState('')
  const [secondValue, setSecondValue]=useState('');

  const [thirdAnswer, setThirdAnswer]=useState('');
  const [thirdId, setThirdId]=useState(''); 
  
  const [treatmentSection, setTreatmentSection]=useState([]);
  const [treatmentClass, setTreatmentClass]=useState([]);
  const [medication, setMedication]=useState([]);
  const [tolerability, setTolerability]=useState([]);
  const [adherence, setAdherence]=useState([]);
  const [response, setResponse]=useState([]);
  const [dosage, setDosage]=useState([]);

  const [order, setOrder]=useState(0);
  const [fourthValue, setFourthValue]=useState(0);
  const [augCount, setAugCount]=useState(0);
  const [aug, setAug]=useState('');
  const [ect, setEct]=useState('');
  const [level, setLevel]=useState('');
  const [ectCount, setEctCount]=useState(0);
  const [MSM, setMSM]=useState(0);

  let treatmentCount=0;

    
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
      return <FourthQuestion fourthSubmit={getFourthData} fourthBack={fourthBack} addMore={addTreatment}/>
    }
    else if(order===5){
      return <Confirmation finalSubmit={showResult}/>
    }
    else if(order===6){
      return <Result  finalSubmit={complete}firstAnswer={firstAnswer} firstValue={firstValue} secondAnswer={secondAnswer} secondValue={secondValue}
      thirdAnswer={thirdAnswer} treatmentSection={treatmentSection} fourthValue={fourthValue} augCount={augCount} ectCount={ectCount}
      treatmentClass={treatmentClass} medication={medication}/>
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
    
    setFirstAnswer(firstAnswer);
    setFirstValue(firstValue);

    setOrder(2);
            
  };

  const getSecondData=(secondAnswer, secondValue)=>{
    setSecondAnswer(secondAnswer);
    setSecondValue(secondValue);
    setOrder(3);
  }

  const getThirdData=(thirdAnswer, thirdId)=>{
    setThirdAnswer(thirdAnswer);
    setThirdId(thirdId);
    if(thirdId === 100){
      setOrder(6);
    }
    else {
      setOrder(4);
    }

  };


  const addTreatment=(selectedSection, selectedClass, selectedMed, currentTolerability, 
    currentAdherence, currentResponse, currentDosage)=>{


    setTreatmentSection([...treatmentSection, selectedSection]);
    setTreatmentClass([...treatmentClass, selectedClass]);
    setMedication([...medication, selectedMed]);
    setTolerability([...tolerability, currentTolerability]);
    setAdherence([...adherence, currentAdherence]);
    setResponse([...response, currentResponse]);
    setDosage([...dosage, currentDosage]);

  };

  const getFourthData=(selectedSection, selectedClass, selectedMed, currentTolerability, 
    currentAdherence, currentResponse, currentDosage,)=>{
    
    setTreatmentSection([...treatmentSection, selectedSection]);
    setTreatmentClass([...treatmentClass, selectedClass]);
    setMedication([...medication, selectedMed]);
    setTolerability([...tolerability, currentTolerability]);
    setAdherence([...adherence, currentAdherence]);
    setResponse([...response, currentResponse]);
    setDosage([...dosage, currentDosage]);
    
    setOrder(5);
  };

  const showResult=()=>{

          treatmentSection.forEach(treatment=>{
            if(treatment=== "RECOGNISED ANTIDEPRESSANTS"){
              treatmentCount+=1;
            }
          });
          if(treatmentCount<=2){
            setFourthValue(1);
            setLevel('Level 1');
          }
          else if(treatmentCount>=3 && treatmentCount<=4){
            setFourthValue(2);
            setLevel('Level 2');
          }
          else if(treatmentCount>=5 && treatmentCount<=6){
            setFourthValue(3);
            setLevel('Level 3');

          }
          else if(treatmentCount>=7 && treatmentCount<=10){
            setFourthValue(4);
            setLevel('Level 4');

          }
          else {
            setFourthValue(5);
            setLevel('Level 5')
          }


          treatmentSection.forEach(treatment=>{
            if(treatment=== "RECOGNISED AUGMENTATION THERAPIES"){
              setAugCount(1);
            }
          });         


          medication.forEach(medication=>{
            if(medication=== "ECT"){
              setEctCount(1);
            }
          });     

          setOrder(6);
  };


  const complete=(MSM)=>{

    setMSM(MSM);
    const currentTime=new Date();
    switch(augCount){
      case 1:
        setAug("Yes");
        break;

      default:
        setAug("No")
    }

    switch(ectCount){
      case 1:
        setEct("Yes");
        break;

      default:
        setEct("No")
    }
    
    const Patient={ Name, DOB, Gender, Phone, martialStatus, childrenNo, professionalStatus,
      currentTime, firstAnswer, secondAnswer, thirdAnswer, treatmentSection, treatmentClass, medication, 
      tolerability, adherence, response, dosage, MSM, aug, ect, level
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


  return (
    <div>
      {orderChanges(order)}
      
    </div>
  )
}

export default Questions