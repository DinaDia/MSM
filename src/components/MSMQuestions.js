import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


const MSMQuestions = ({Patient}) => {
    

    const [Duration, setDuration]=useState('');
    const [Severity, setSeverity]=useState('');
    const [TRD, setTRD]=useState('');
    const [Level, setLevel]=useState('');
    const [aug, setAug]=useState('');
    const [ect, setEct]=useState('');
    
    const navigate=useNavigate();

    const [result, setResult]=useState(false);
    const [question, setQuestion]=useState(0);
    const [score, setScore]=useState(0);    
    const [currentAnswer, setCurrentAnswer]=useState([]);
    const [currentId, setCurrentId]=useState([]);
    const [finalResult, setFinalResult]=useState('');

   


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
                {id:100, answer: "No", value: 0},
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
        },
        {
            msm: "Test completed, click here to see result",
            options:[
                {id:0, answer: "Show result", value: 0}            
            ],
        }
                ];

                
                
    const OptionClicked=(value, id, answer)=>{
            setScore(score+value);
            setCurrentAnswer([...currentAnswer, answer]);
            setCurrentId([...currentId, id]);
            setSeverity(currentAnswer[0]);
            setDuration(currentAnswer[1]);
            setTRD(currentAnswer[2]);
            
            const level=currentId[3];
            switch(level){
                case 0: 
                setLevel('Level 1');
                break;

                case 1:
                setLevel('Level 2');
                break;

                case 2:
                setLevel('Level 3');
                break;

                case 3:
                setLevel('Level 4');
                break;

                case 4:
                setLevel('Level 5');
                break;

                default:
                setLevel('Not identified');
            }
            setAug(currentAnswer[4]);
            setEct(currentAnswer[5]);
                    if ((question + 1 <questions.length)){
                        const arr=[];
                        arr.push(id);
                        
                        if(arr[0]!== 100){
                            setQuestion(question + 1);
                        }
                        else{
                            setQuestion(6);
                        }
                     }
                         
                     else {
                         setResult(true);              
                       } 
                    };

     

    const handleSubmit=(e)=>{
                        e.preventDefault();
                        const DetailedInfo={  Duration,Severity, TRD, Level, aug, ect};

                        fetch('http://localhost:8000/patients', {
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(DetailedInfo)
                      }).then(() => {
                        navigate('/')
                      })
                      
                    }

                    
   
  return (
    <div>
        <Header/>
        
        {result ? (
            <div className="questionDiv">
            {score}


           
           <div className='smallerBoxButtonsDiv'>
              <button className='backButtons' 
              onClick={()=>navigate('/InitialQuestion')}>
                Go back</button>

              <button className='rightButtons'
              onClick={handleSubmit}>
                Save</button>
          </div>
            
            </div>
        ): 
        (
            <div className="questionDiv">
            <p className="questionText">{questions[question].msm} </p>
            <ul> 
            {questions[question].options.map((option)=>{
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

        )}

        
        
    </div>
  )
}

export default MSMQuestions