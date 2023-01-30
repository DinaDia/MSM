import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate=useNavigate();
    const [email, setEmail]=useState('');
    const [passWord, setPassWord]=useState('');

    const handleSubmit=(e)=>{
      e.preventDefault();
      navigate('/Homepage')
    }
    
  return (
    <div>
        <div style={{marginTop:"85px"}}>
           <h2 className='headingTag'>User Login</h2>

           <form className='formStyle' onSubmit={handleSubmit}>
             <label>Email</label>
             <input className='loginInputStyle' type="text"
             placeholder='Email'
             
             value={email}
             onChange={(e)=>setEmail(e.target.value)}  />

             <label>Password</label>
             <input className='loginInputStyle' type="text"
             placeholder='Password'
             
             value={passWord}
             onChange={(e)=>setPassWord(e.target.value)}  />

             
             <div className='smallerBoxButtonsDiv'>
               <button className='LoginButton'>
                   Login</button>
             </div>


             </form>
        </div>
    </div>
  )
}

export default Login