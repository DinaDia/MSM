import { useNavigate } from "react-router-dom";

const SaveChanges = () => {
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }

  return (
    <div>
        Do you want to save test results?
        <div className='smallerBoxButtonsDiv'>
              <button className='backButtons' 
              onClick={()=>navigate('/Questions')}>
                Go back</button>

              <button className='rightButtons'
              onClick={handleSubmit}>
                Complete</button>
          </div>
    </div>
  )
}

export default SaveChanges