import Header from "../Header"
import { useNavigate } from "react-router-dom";

const ThirdQuestion = () => {
    const navigate=useNavigate();

  return (
    <div>
        <Header/>
        <div className="questionDiv">
            <div className="confirmation">
                <p className="questionText">Received treatment for the depression?</p>
                    <button className="answerButtons" onClick={()=>navigate('/FourthQuestion')}>Yes</button>
                    <button className="answerButtons" onClick={()=>navigate('/Result')}>No</button>
                    
            </div>
            
          <div className='endButtonDiv'>
              <button className='backButtons' onClick={()=>navigate('/SecondQuestion')}>Previous</button>
              <button className='rightButtons' onClick={()=>navigate('/FourthQuestion')}>Next</button>
          </div>
        </div>

    </div>
  )
}

export default ThirdQuestion