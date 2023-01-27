import React from 'react';
import { useNavigate } from 'react-router-dom';

const Administration = () => {
    const navigate=useNavigate();
  return (
    <div>
        <div>
            <button onClick={()=>navigate('/Dashboard')}>Next</button>
        </div>
    </div>
  )
}

export default Administration