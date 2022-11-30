import '../App.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <div className='loginArea'>
            <div className='firstArea'>
                <div className='pass'> 
                <span className='icons'> &#9993;</span>
                Email</div>
                <input className='inputStyle' type="text"/>
                <br/>
                <div className='pass'>Password</div>
                <input className='inputStyle' type="password"/>
            </div>

            <button className='logInButton'>LOGIN</button>
            
              <p className='textSignup'>Don't have an account?</p>
              <button className='signupButton'>
                <Link className='linkStyle' to={'/Homepage'}>Sign up</Link></button>
                
            
        </div>
    </div>
  )
}

export default Login