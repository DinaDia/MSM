
import DataCollection from "../DataCollection";
import Details from "./Details";

const Homepage = () => {

  const {data:Patients, error}=DataCollection('http://localhost:8000/patients');
  return (
    <div>
      
     {
      error && 
        <div className="errorMessageStyle">
          Error has occurred, please try again
        </div>
      }
      
      {Patients && <Details data={Patients}/>
}
          

          
    </div>
  )
}

export default Homepage