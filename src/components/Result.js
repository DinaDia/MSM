import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";


const Result = ({finalSubmit, Duration, firstValue,symptom, secondValue, thirdAnswer,
  treatmentSection, treatmentClass, medication, augCount, ectCount, countedMed, aug, ect, responseOfMed, adherence, tolerability, response, medDuration }) => {

    
    const [finalResult, setFinaLResult]=useState('');
    const [fourthValue, setFourthValue]=useState(0);
    const [level, setLevel]=useState('');
    const [trdInfo, setTrdInfo]=useState('');
    const [MSM, setMSM]=useState(0);
    const [durationInfo, setDurationInfo]=useState('');

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
      e.preventDefault();
    }

    const SampleFun=()=>{


      const treatmentCount=countedMed.length;

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
        setLevel('Level 5');
      }

      const score=Number(firstValue)+ Number(secondValue)+ Number(fourthValue)+ Number(augCount)+ Number(ectCount);
      setMSM(score);

      if(treatmentCount<=0){
        setFinaLResult('Treatment resistance not detected');
      }
      else {
        setFinaLResult('Treatment resistance detected');
        if(score>=1 && score<=6){
          setTrdInfo('Patient has treatment resistance with mild severity');
        }
        else if(score>7 && score<=10){
          setTrdInfo('Patient has treatment resistance with moderate severity');
        }
        else{
          setTrdInfo('Patient has treatment resistance with severe severity');
         }
      }
      
  
         return (
          <div className="MSMResult">
            <h2 style={{marginLeft: "50px"}}>Test Result</h2>
            <h3 className='patientInfoTextStyle'>{finalResult}</h3>
          
            <p className='patientInfoText'>{trdInfo} and has been having {symptom.toLowerCase()} symptoms for {Duration.toLowerCase()} </p>
            <br/><br/>
            <h3 className='patientInfoTextStyle'>Medication Summary</h3>
            <p className='patientInfoText'>The patient has taken total of {treatmentCount} at the time screening</p>
            <p className='patientInfoText'>List of medication taken is as follows:</p>
              {medication.map((med, i)=>{
                return(
                  <p key={i}>&#x2022;{med}:<span className='patientInfoText'>
                     {tolerability[i].toLowerCase()} , {adherence[i]} adherence, {response[i]} response
                    </span>  </p>
                )
              })}

             <div className='smallerBoxButtonsDiv'>
                <button className='backButtons' 
                onClick={()=>navigate('/')}>
                  Go to homepage</button>
  
                <button className='rightButtons'
                onClick={handleSubmit}>
                  Save</button>
            </div>
              
              </div>
         )
         }  
  return (
    <div>
      <Header/>
      <SampleFun/>
    </div>
  )
}

export default Result