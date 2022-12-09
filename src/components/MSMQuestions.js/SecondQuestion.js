import Header from "../Header";
import { useNavigate } from "react-router-dom";

const SecondQuestion = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Header/>
        <div className="questionDiv">
            <div className="confirmation">
                <p className="questionText">How long was the duration of the current depression episode?</p>
                    <button className="answerButtons">Less than a year</button>
                    <button className="answerButtons">Between a year and two</button>
                    <button className="answerButtons">More than two years</button>
            
            </div>
            
          <div className='endButtonDiv'>
              <button className='backButtons' onClick={()=>navigate('/FirstQuestion')}>Previous</button>
              <button className='rightButtons' onClick={()=>navigate('/ThirdQuestion')}>Next</button>
          </div>
        </div>
    </div>
  )
}

export default SecondQuestion