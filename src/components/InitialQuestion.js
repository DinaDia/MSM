import { useNavigate } from "react-router-dom";
import Header from "./Header"

const InitialQuestion = () => {
    const navigate=useNavigate();
  return (
    <div>
        <Header/>
        <div className="questionDiv">
            <div className="confirmation">
                <p className="questionText">Has the diagnosis of depression been confirmed?</p>
                <button className="answerButtons"
                onClick={()=>navigate('/AddInfo')}>Yes
                </button>
            </div>

            <div className="confirmation">
                <p className="questionText">If not, click here to start the Test</p>
                <button className="logInButton"
                onClick={()=>navigate('/MSMQuestions')}>
                    Take Test</button>
            </div>
        </div>
    </div>
  )
}

export default InitialQuestion