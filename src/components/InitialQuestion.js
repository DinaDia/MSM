import { Link } from "react-router-dom"
import Header from "./Header"

const InitialQuestion = () => {
  return (
    <div>
        <Header/>
        <div className="questionDiv">
            <div className="confirmation">
                <p className="questionText">Has the diagnosis of depression been confirmed?</p>
                <button className="answerButtons">
                    <Link className="answerButtonsLink" to={'/AddInfo'}>Yes</Link>
                </button>
            </div>

            <div className="confirmation">
                <p className="questionText">If not, click here to start the Test</p>
                <button className="logInButton">
                    <Link className="testButtonsLink" to={'/MSMQuestions'}>Take Test</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default InitialQuestion