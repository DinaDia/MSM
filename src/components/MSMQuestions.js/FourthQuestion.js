import { useNavigate } from "react-router-dom";
import Header from "../Header";

const FourthQuestion = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Header/>
        <div className="questionDiv">
            <div className="confirmation">
                <p className="questionText">Has taken antidepressant for treatment?</p>
                    <button className="answerButtons" >Yes</button>
                    <button className="answerButtons" >No</button>
            </div>
            
          <div className='endButtonDiv'>
              <button className='backButtons' onClick={()=>navigate('/ThirdQuestion')}>Previous</button>
              <button className='rightButtons' onClick={()=>navigate('/FifthQuestion')}>Next</button>
          </div>
        </div>

    </div>
  )
}

export default FourthQuestion