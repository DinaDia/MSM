
import Header from "../Header"


const Confirmation = ({confirmSubmit, startAgain}) => {


    const handleClick=(e)=>{
        e.preventDefault();
        confirmSubmit();
    }

    const takeTestAgain=(e)=>{
        e.preventDefault();
        startAgain();
    }

  return (
    <div>
        <Header/>
        <div className="MSMQuestions">
        <div className="questionDiv">
            <p className="questionText">Test completed, click here to see result</p>
            <ul>
                <li onClick={handleClick}>Check result</li>
                <li onClick={takeTestAgain}>Take test again</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Confirmation