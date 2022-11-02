import '../App.css'
const Login = () => {
  return (
    <div className='loginStyle'>
        <div>
            <div className='emailDiv'>
                <p className='emailStyle'><span>&#9993;</span>Email</p>
                <div className='box'></div>
            </div>
            
        <div className='passDiv'>
            <p>Password</p>
            <div className='box'></div>
    </div>

        </div>
        
            <button className='login'>Login</button>
    </div>
  )
}

export default Login