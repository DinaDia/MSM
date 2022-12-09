import { Link } from "react-router-dom";
import Header from "./Header";
const Details = ({data:Patients}) => {
  return (
    <div>  
      <Header/>
      <table className="tableStyle">
            <thead >
              <tr>

                <th className="tHeadStyle">Patient ID</th>
                <th className="tHeadStyle">Name</th>
                <th className="tHeadStyle">Age</th>
                <th className="tHeadStyle">Gender</th>
                <th className="tHeadStyle">Duration</th>
                <th className="tHeadStyle">Severity</th>
                <th className="tHeadStyle">TRD</th>
                <th className="tHeadStyle"></th>
                <th className="tHeadStyle"></th>
                <th className="tHeadStyle"></th>


              </tr>
            </thead>

            {Patients.map((patient, id)=>(
            
                

                     
            <tbody>
              <tr key={id}>

                <td className="tBodyStyle">{patient.id}</td>
                <td className="tBodyStyle">{patient.Name}</td>
                <td className="tBodyStyle">{patient.Age}</td>
                <td className="tBodyStyle">{patient.Gender}</td>
                <td className="tBodyStyle">{patient.Duration}</td>
                <td className="tBodyStyle">{patient.Severity}</td>
                <td className="tBodyStyle">{patient.TRD}</td>
                <td className="tBodyStyle">
                  <button className="viewButton">
                    <Link className="linkStyle" to={`PatientInfo/${patient.id}`}>View</Link>
                    </button>
                </td>
                <td className="tBodyStyle">
                  <button className="editButton">
                    <Link className="linkStyle" to={'/EditInfo'}>Edit</Link>
                    </button>
                </td>
                <td className="tBodyStyle">
                  <button className="deleteButton">
                    <Link className="linkStyle" to={'/DeleteInfo'}>Delete</Link>
                    </button>
                </td>

              </tr>
            </tbody>
          ))}

</table>

    </div>
  )
}

export default Details