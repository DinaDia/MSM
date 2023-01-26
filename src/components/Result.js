import { useNavigate } from "react-router-dom";
import Header from "./Header";


const Result = ({finalSubmit, firstAnswer, firstValue,secondAnswer, secondValue, thirdAnswer,
  treatmentSection, treatmentClass, medication, fourthValue, augCount, ectCount, countedMed, aug, ect}) => {

    const handleSubmit=(e)=>{
      e.preventDefault();
    }

    const SampleFun=()=>{

      const score=Number(firstValue) + Number(secondValue) + Number(fourthValue) + Number(augCount) + Number(ectCount);
  
        setMSM(score);
        
        if(score<=3){
          setFinaLResult('MSM not detected');
          setTrdInfo(Patient doesn't have treatment resistance);
         }
         else if(score>3 && score<=6){
          setFinaLResult('MSM detected');
          setTrdInfo(Patient has treatment resistance with mild severity)
         }
         else if(score>7 && score<=10){
          setFinaLResult('MSM detected');
          setTrdInfo('Patient has treatment resistance with moderate severity');
         }
         else {
          setFinaLResult('MSM detected');
          setTrdInfo('Patient has treatment resistance with severe severity');
         }
  
         return (
          <div className="MSMResult">
              <h2 style={{marginLeft: "50px"}}>{finalResult}</h2>
              <p>{trdInfo} and has {secondAnswer.toLowerCase()} symptoms  that have lasted for {firstAnswer.toLowerCase()}</p>
  
  
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