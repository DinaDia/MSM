
import { useState } from "react";
import Header from "../../Header";
const SecondQuestion = ({secondSubmit, secondBack}) => {
  
    const [secondAnswer, setSecondAnswer]=useState('')
    const [secondValue, setSecondValue]=useState('');
    const [secondId, setSecondId]=useState('');


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

    const OptionClicked=(value, id, answer)=>{
        setSecondAnswer(answer);
        setSecondValue(value);
        setSecondId(id);
 }

 const handleSubmit=(e)=>{
    e.preventDefault();
    secondSubmit(secondAnswer, secondId, secondValue);
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
                    onClick={()=> OptionClicked(option.value, option.id, option.answer)}
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