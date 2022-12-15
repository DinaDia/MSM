import React from 'react'
import DataCollection from '../DataCollection'
import Header from './Header'

const AddInfo = () => {
  const {error}=DataCollection('http://localhost:8000/patients');
  return (
    <div>
      {
      error && 
        <div className="errorMessageStyle">
          Error has occurred, please try again
        </div>
      }

      {
        <div>
          <Header/>
          <div>
            <form>
              <div>Lets go</div>
            </form>
          </div>
        </div>
      }
     
      
    </div>
  )
}

export default AddInfo