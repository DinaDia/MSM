import '../App.css'
const Login = () => {
  return (
    <div className='loginStyle'>
        <div style={{marginTop:"50px", marginBottom:"0"}}>
            <p className='emailStyle'><span>&#9993;</span>Email</p>
            <div className='box'></div>
        </div>

        <div>
            <p className='emailStyle'>Password</p>
            <div className='box'></div>
        </div>            

            <button className='login'>Login</button>
    </div>
  )
}

export default Login