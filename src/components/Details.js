import { useNavigate } from "react-router-dom";
import DataCollection from "../DataCollection";
import Header from "./Header";
const Details = ({data:Patients}) => {

   const navigate=useNavigate();
   const {error}=DataCollection('http://localhost:8000/patients');
   
  
  return (
    <div>
      {
      error && 
        <div className="errorMessageStyle">
          Error has occurred, please try again
        </div>
      }

      {
        <div>  
        <Header/>
        <table className="tableStyle">
              <thead >
                <tr>
  
                  <th className="tHeadStyle">Patient ID</th>
                  <th className="tHeadStyle">Name</th>
                  <th className="tHeadStyle">Age</th>
                  <th className="tHeadStyle">Gender</th>
                  <th className="tHeadStyle">MSM Score</th>
                  <th className="tHeadStyle">Duration</th>
                  <th className="tHeadStyle">Severity</th>
                  <th className="tHeadStyle">TRD</th>
                  <th className="tHeadStyle"></th>
                  <th className="tHeadStyle"></th>
  
                </tr>
              </thead>
  
              {Patients.map((patient)=>(
              
              <tbody>
                <tr key='{patient.id}'>
  
                  <td className="tBodyStyle">{patient.id}</td>
                  <td className="tBodyStyle">{patient.Name}</td>
                  <td className="tBodyStyle">{patient.Age}</td>
                  <td className="tBodyStyle">{patient.Gender}</td>
                  <td className="tBodyStyle">{patient.Msm}</td>
                  <td className="tBodyStyle">{patient.Duration}</td>
                  <td className="tBodyStyle">{patient.Severity}</td>
                  <td className="tBodyStyle">{patient.TRD}</td>
                  <td className="tBodyStyle">
  
                      <button className="viewButton"
                      onClick={()=>navigate(`PatientInfo/${patient.id}`)}>View
                      </button>
                  </td>
                  <td className="tBodyStyle">
                      <button className="editButton"
                      onClick={()=>navigate(`/EditInfo/${patient.id}`)}>Edit
                      </button>
                  </td>
  
                </tr>
              </tbody>
            ))}
  
  </table>
  
      </div>
      }
    </div>
  )
}

export default Details