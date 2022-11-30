import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="headerStyle">
      <Link to={'/Homepage'}>
          <img className="imgStyle"
          src="https://www.cdt-africa.org/templates/g5_helium/custom/images/Logo/Asset%206logo%20revisedd%20.png" 
          alt="logo"/>
      </Link>
      <button className="addPatientButton">Add new patient</button>
      
    </div>
  )
}

export default Header