import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate=useNavigate();

  return (
    <div className="headerStyle">
      
      <img className="imgStyle"
      src="https://www.cdt-africa.org/templates/g5_helium/custom/images/Logo/Asset%206logo%20revisedd%20.png" 
      alt="logo"
      onClick={()=>navigate('/')}/>
      
      <button className="addPatientButton"
      onClick={()=>navigate('/InitialInfo')}>
        Add new patient</button>
      
    </div>
  )
}

export default Header