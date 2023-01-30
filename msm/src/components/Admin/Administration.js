
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Administration = () => {
    const navigate=useNavigate();
    const [email, setEmail]=useState('');
    const [passWord, setPassWord]=useState('');
    const [check, setCheck]=useState('');
    const [validateMessage, setValidateMessage]=useState('');
    
    const handleSubmit=(e)=>{
      e.preventDefault();

      navigate('/Dashboard')

      // if(validate()){
      //   fetch('http://localhost:8000/users/'+ email).then((res)=>{
      //     return res.json();
      //   }).then((resp)=>{
      //     console.log(Object.keys(resp).length);
      //     if(Object.keys(resp).length === 0){
      //       setCheck('Incorrect email or password');
      //     }
      //     else{
      //       if(resp.password===passWord){
      //         navigate('/Dashboard')
      //       }
      //       else{
      //         setCheck('Incorrect email or password');
      //       }
      //     }
      //   }).catch((err)=>{
      //     setCheck('Login failed. Please try again'+ err.message);
      //   })
      // }

    }

    // const validate=()=>{
    //   let result=true;
    //   if(email === '' || email===null){
    //     result=false;
    //     setValidateMessage('Please enter both email and password');
    //   }
    //   if(passWord=== '' || passWord===null){
    //     result=false;
    //     setValidateMessage('Please enter email and password');
    //   }
    // }
  return (
    <div>
        <div style={{marginTop:"85px"}}>
           <h2 className='headingTag'>Admin Login</h2>

            
           <form className='formStyle'>
             <label>Email</label>
             <input className='loginInputStyle' type="email"
             placeholder='Email'
             
             value={email}
             onChange={(e)=>setEmail(e.target.value)}  />

             <label>Password</label>
             <input className='loginInputStyle' type="password"
             placeholder= 'Password'
             
             value={passWord}
             onChange={(e)=>setPassWord(e.target.value)}  />


             
           <p>{validateMessage}</p>
           <p>{check}</p>

             <div className='smallerBoxButtonsDiv'>
               <button className='LoginButton'
               onClick={handleSubmit}>
                   Login</button>
             </div>


             </form>
        </div>
    </div>
  )
}

export default Administration