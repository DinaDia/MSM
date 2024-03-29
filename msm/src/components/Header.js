import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate=useNavigate();

  return (
    <div className="headerStyle">
      
      <img className="imgStyle"
      src="	https://www.cdt-africa.org/templates/g5_helium/custom/images/Logo/Asset%206logo%20revisedd%20.png" 
      alt="logo"
      onClick={()=>navigate('/Homepage')}/>
      
      <button className="addPatientButton"
      onClick={()=>navigate('/Questions')}>
        Add new patient</button>
      
    </div>
  )
}

export default Header