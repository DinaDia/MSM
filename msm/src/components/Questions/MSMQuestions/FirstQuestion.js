import { useState } from "react";
import Header from "../../Header";


const FirstQuestion = ({firstSubmit, firstBack}) => {
    

    const [firstValue, setFirstValue]=useState('');
    const [firstAnswer, setFirstAnswer]=useState('');


    const msm1= {
        msm: "What was the duration of the current depressive episode?",
        options:[
            {id:0, answer: "Less than a year", value: 1},
            {id:1, answer: "Between a year and two", value: 2},
            {id:2, answer: "More than two years", value: 3},
        ],
    };


     const OptionClicked=(value, answer)=>{
            setFirstAnswer(answer);
            setFirstValue(value);
     };

     const handleSubmit=(e)=>{
        e.preventDefault();
        firstSubmit(firstAnswer, firstValue);
     };

     const GoBackFun=(e)=>{
        e.preventDefault();
        firstBack();
      };
    


  return (
    <div>
        <Header/>
    <div className="MSMQuestions">
        <div className="questionDiv">
            <p className="questionText">{msm1.msm} </p>
            <ul> 
            {msm1.options.map((option)=>{
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

export default FirstQuestion