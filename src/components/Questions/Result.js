
import { useState } from "react";
import Header from "../Header"


const Result = ({firstAnswer, firstValue,secondAnswer, secondValue, thirdAnswer, thirdValue,
  treatmentSection, treatmentClass, medication}) => {

    const value=medication.length+1;
    const [fourthValue, setFourthValue]=useState();
    if(treatmentSection.includes("RECOGNISED ANTIDEPRESSANTS")===true){
      setFourthValue("Yesss");
    }
    

  return (
    <div>
        <Header/>
        {fourthValue}
    </div>
  )
}

export default Result