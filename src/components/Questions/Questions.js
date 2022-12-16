
import { useState } from 'react';
import InitialInfo from './InitialInfo';
import MSMQuestions from './MSMQuestions';
import AddInfo from '../AddInfo';
import { useNavigate } from 'react-router-dom';


const Questions =()  => {

  const [order, setOrder]=useState(0);
  const info=[];
  const navigate=useNavigate();
  

  const orderChanges=()=>{
    if(order===0){
      return <InitialInfo onSubmit={getData}/>;      
    }
    else if(order ===1){
      return <MSMQuestions secondSubmit={getMSM}/>
    }
    else if(order ===2){
      return <AddInfo finalSubmit={getMed}/>
    }
  }
  
  const getData=(Name, Age, Gender, Phone)=>{
    info.push(Name, Age, Gender, Phone);
    setOrder(1);
      
    console.log(info)           
  }
  const getMSM=(MSM, Duration, Severity, TRD, Level, aug, ect)=>{
    info.push(MSM, Duration, Severity, TRD, Level, aug, ect);
    setOrder(2);
    console.log(info)
  }

  const getMed=()=>{

  }
  return (
    <div>
      
      {orderChanges(order)}
      
    </div>
  )
}

export default Questions