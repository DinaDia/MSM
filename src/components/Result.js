import { useNavigate } from "react-router-dom";
import Header from "./Header";
const Result = () => {
    const navigate=useNavigate();
    return (
      <div>
          <Header/>
          <div className="questionDiv">
              <div className="confirmation">
                  <p className="questionText">Sample results here</p>
              </div>
              
            <div className='endButtonDiv'>
                <button className='backButtons' onClick={()=>navigate('/SeventhQuestion')}>Previous</button>
                <button className='rightButtons' onClick={()=>navigate('/')}>Save</button>
            </div>
          </div>
    </div>
  )
}

export default Result