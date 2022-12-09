import { useNavigate } from "react-router-dom";
import Header from "../Header";
const SeventhQuestion = () => {
    const navigate=useNavigate();
    return (
      <div>
          <Header/>
          <div className="questionDiv">
              <div className="confirmation">
                  <p className="questionText">Received ECT?</p>
                      <button className="answerButtons">Yes</button>
                      <button className="answerButtons">No</button>
              
              </div>
              
            <div className='endButtonDiv'>
                <button className='backButtons' onClick={()=>navigate('/SixthQuestion')}>Previous</button>
                <button className='rightButtons' onClick={()=>navigate('/Result')}>Next</button>
            </div>
          </div>
    </div>
  )
}

export default SeventhQuestion