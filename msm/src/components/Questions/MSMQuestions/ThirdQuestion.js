import { useState } from "react";
import Header from "../../Header";


const ThirdQuestion = ({thirdSubmit, thirdBack}) => {
    

    const [thirdAnswer, setThirdAnswer]=useState('');
    const [thirdId, setThirdId]=useState('');


    const msm3= {
        msm: "Received treatment for the depression?",
        options:[
            {id:1, answer: "Yes", value: 0},
            {id:100, answer: "No", value: 0},
        ],
    };


    const OptionClicked=(id, answer)=>{
        setThirdAnswer(answer);
        setThirdId(id);
 };
    const handleSubmit=(e)=>{
        e.preventDefault();
        thirdSubmit(thirdAnswer, thirdId);

    };

    const GoBackFun=(e)=>{
        e.preventDefault();
        thirdBack();
      };

  return (
    <div>
        <Header/>
        <div className="MSMQuestions">
        <div className="questionDiv">
            <p className="questionText">{msm3.msm} </p>
            <ul> 
            {msm3.options.map((option)=>{
                return(
                    <li key={option.id}
                    onClick={()=> OptionClicked(option.id, option.answer)}
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

export default ThirdQuestion