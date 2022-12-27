
import Header from "../Header"


const Confirmation = ({finalSubmit}) => {


    const handleSubmit=(e)=>{
        e.preventDefault();
        finalSubmit();
    }
  return (
    <div>
        <Header/>
        <div className="MSMQuestions">
        <div className="questionDiv">
            <p className="questionText">Test completed, click here to see result</p>
            <ul>
                <li onClick={handleSubmit}>Check result</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Confirmation