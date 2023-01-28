
import { useState } from "react";
import Header from "../../Header";
const SecondQuestion = ({secondSubmit, secondBack}) => {
  
    const [secondAnswer, setSecondAnswer]=useState('')
    const [secondValue, setSecondValue]=useState('');


    const msm2={
        msm: "How severe are the symptoms?",
        options:[
            {id:0, answer: "Subsyndromal", value: 1},
            {id:1, answer: "Mild", value: 2},
            {id:2, answer: "Moderate", value: 3},
            {id:3, answer: "Severe without psychosis", value: 4},
            {id:4, answer: "Severe with psychosis", value: 5},
        ],
    };

    const OptionClicked=(value, answer)=>{
        setSecondAnswer(answer);
        setSecondValue(value);
 }

 const handleSubmit=(e)=>{
    e.preventDefault();
    secondSubmit(secondAnswer, secondValue);
   };

   const GoBackFun=(e)=>{
    e.preventDefault();
    secondBack();
  };


  
  return (
    <div>
        <Header/>
    <div className="MSMQuestions">
        <div className="questionDiv">
            <p className="questionText">{msm2.msm} </p>
            <ul> 
            {msm2.options.map((option)=>{
                return(
                    <li key={option.id}
                    onClick={()=> OptionClicked(option.value, option.answer)}
                    >
                        {option.answer}
                    </li>
                );
            })}    
            </ul>
     
        </div>
        <div className='endButtonDiv'>
              <button className='backButtons' 
              onClick={GoBackFun}>
                Go back</button>

              <button className='rightButtons'
              onClick={handleSubmit}>
                Next</button>
          </div>           
    </div>

    </div>
  )
}

export default SecondQuestion