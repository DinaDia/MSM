import { useNavigate } from "react-router-dom";
import Header from "../Header";

const FifthQuestion = () => {
    const navigate=useNavigate();
    return (
      <div>
          <Header/>
          <div className="questionDiv">
              <div className="confirmation">
                  <p className="questionText">Number of antidepressant taken for this treatment?</p>
                      <button className="answerButtons">1-2 medications</button>
                      <button className="answerButtons">3-4 medications</button>
                      <button className="answerButtons">5-6 medications</button>
                      <button className="answerButtons">7-10 medications</button>
                      <button className="answerButtons">More than 10 medications</button>
              
              </div>
              
            <div className='endButtonDiv'>
                <button className='backButtons' onClick={()=>navigate('/FourthQuestion')}>Previous</button>
                <button className='rightButtons' onClick={()=>navigate('/SixthQuestion')}>Next</button>
            </div>
          </div>
    </div>
  )
}

export default FifthQuestion