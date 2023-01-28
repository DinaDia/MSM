import DataCollection from "../../DataCollection";
import Header from '../Header';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditOptions = () => {

    
  const {id}=useParams();
  const {data:patient, error}=DataCollection('http://localhost:8000/patients/'+id);
  const navigate=useNavigate();

  

  return (
    <div>
        {error && 
        <div className="errorMessageStyle">
          Error has occurred, please try again
        </div>
        }

      {
        <div>
        <Header/>
        <div className="editOptionDiv">
            <div className="confirmation">
                <p className="questionText">Select the patient information you would like to update</p>
                <br/>
                <button className="answerButtons"
                onClick={()=>navigate(`/EditPersonalInfo/${patient.id}`)}
                >Personal Information
                </button>
                <button className="answerButtons"
                onClick={()=>navigate(`/UpdateMedicalInfo/${patient.id}`)}
                >Medical Record
                </button>
            </div>
        </div>
        </div>

      }
    </div>
  )
}

export default EditOptions