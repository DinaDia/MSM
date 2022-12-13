import { useState } from "react";
import Header from "./Header";

const MSMQuestions = () => {
    const [result, setResult]=useState(false);
    const [question, setQuestion]=useState(0);
    const [score, setScore]=useState(0);
    const [finalValues, setFinalValues]=useState([]);

    const questions=[
        {
            msm: "How severe are the symptoms?",
            options:[
                {id:0, answer: "Subsyndromal", value: 1},
                {id:1, answer: "Mild", value: 2},
                {id:2, answer: "Moderate", value: 3},
                {id:3, answer: "Severe without psychosis", value: 4},
                {id:4, answer: "Severe with psychosis", value: 5},
            ],
        },
        {
            msm: "What was the duration of the current depressive episode?",
            options:[
                {id:0, answer: "Less than a year", value: 1},
                {id:1, answer: "Between a year and two", value: 2},
                {id:2, answer: "More than two years", value: 3},
            ],
        },
        {
            msm: "Received treatment for the depression?",
            options:[
                {id:1, answer: "Yes", value: 0},
                {id:10, answer: "No", value: 0},
            ],
        },
        {
            msm: "Number of anti depressants taken for this treatment?",
            options:[
                {id:0, answer: "1-2 medications", value: 1},
                {id:1, answer: "3-4 medications", value: 2},
                {id:2, answer: "5-6 medications", value: 3},
                {id:3, answer: "7-10 medications", value: 4},
                {id:4, answer: "More than 10 medications", value: 5},
            ],
        },
        {
            msm: "Received augmentation?",
            options:[
                {id:1, answer: "Yes", value: 1},
                {id:0, answer: "No", value: 0},
            ],
        },
        {
            msm: "Received ECT?",
            options:[
                {id:1, answer: "Yes", value: 1},
                {id:0, answer: "No", value: 0},            
            ],
        }
                ];


    const optionClicked=(e, value, answer)=>{
            setScore(score+value);
            // setFinalValues([...finalValues, {
            //     Id:id,
            //     Answer:answer
            // }])
            

            console.log(e.currentTarget);


            if ((question + 1 < questions.length) ){
               setQuestion(question + 1);
               
            }
                
            else {
                setResult(true);
              }
            };

        
        
   
  return (
    <div>
        <Header/>
        
        {result ? (
            <div className="questionDiv">
            {score}
            
</div>
        ): 
        (
            <div className="questionDiv">
            <p className="questionText">{questions[question].msm} </p>
            <ul> 
            {questions[question].options.map((option)=>{
                return(
                    <li key={option.id}
                    onClick={()=> optionClicked(option.value, option.id, option.answer)}
                    >
                        {option.answer}
                        
                    </li>
                );
                
            })}    
            </ul>
        </div>

        )}

        
        
    </div>
  )
}

export default MSMQuestions