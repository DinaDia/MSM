import '../App.css';

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

            <button className='login'>Log in</button>
            
        </div>
    <p className='signUpText'>Don't have an account? Sign up here</p>

    <button  className='signUp'>
        Sign up
    </button>

    </div>
  )
}

export default Login