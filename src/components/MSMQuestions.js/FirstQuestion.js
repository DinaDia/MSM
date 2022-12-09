import Header from "../Header"
import { useNavigate } from "react-router-dom";

const FirstQuestion = () => {

    const navigate=useNavigate();
  return (
    <div>
        <Header/>
        <div className="questionDiv">
            <div className="confirmation">
                <p className="questionText">How severe were the symptoms?</p>
                    <button className="answerButtons">Subsundromal</button>
                    <button className="answerButtons">Mild</button>
                    <button className="answerButtons">Moderate</button>
                    <button className="answerButtons">Severe without psychosis</button>
                    <button className="answerButtons">Severe with psychosis</button>
            
            </div>
            
          <div className='endButtonDiv'>
              <button className='backButtons' onClick={()=>navigate('/InitialQuestion')}>Go back</button>
              <button className='rightButtons' onClick={()=>navigate('/SecondQuestion')}>Next</button>
          </div>
        </div>
    </div>
  )
}

export default FirstQuestion