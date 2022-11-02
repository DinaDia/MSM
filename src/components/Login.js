import '../App.css';
import {Link} from 'react-router-dom';

const Login = () => {


  return (
    <div className='loginStyle'>
        <div>
            <div className='emailDiv'>
                <p className='loginTextStyle'><span>&#9993;</span>Email</p>
                <div className='box'></div>
            </div>
            
        <div className='passDiv'>
            <p className="loginTextStyle">Password</p>
            <div className='box'></div>
        </div>

    </div>
    
    <button className='login'>
        <Link style={{color:'white', textDecoration:'none'}}
        >Login</Link>
    </button>
    </div>
  )
}

export default Login