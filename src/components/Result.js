const Result = ({treatmentSection, treatmentClass, medication, duration, adherence, response}) => {
  
  
  const SampleFun=()=>{
    for(let i=0; i<=treatmentSection.length; i++){
      
    if(treatmentSection[i] === 'RECOGNISED ANTIDEPRESSANTS'){
      if(adherence[i]==='>75%' && response[i] !== '>75%' && duration[i] ==='Yes'){
        return (
          <div>
              <p>{medication[i]}</p>
          </div>
         )
      }
    }
    }
  }

  const sampleCount=()=>{
    for (let i=0; i<=treatmentSection.length; i++){
      return i;
    }
  }
  
return (
  <div>
    <div>
      <h2>Treatment section</h2>
      <p>{treatmentSection.length}</p>
      {treatmentSection.map((treatment)=>{
        return(
          <p>{treatment}</p>
        )
      })}
    </div>

    
    <div>
      <h2>Treatment Class</h2>
      {treatmentClass.map((treatment)=>{
        return(
          <p>{treatment}</p>
        )
      })}
    </div>

    <div>
      <h2>Treatment name</h2>
      {medication.map((treatment)=>{
        return(
          <p>{treatment}</p>
        )
      })}
    </div>


    
    
    <div>
      <h2>Treatment adherence</h2>
      {adherence.map((treatment)=>{
        return(
          <p>{treatment}</p>
        )
      })}
    </div>


    <div>
      <h2>Treatment response</h2>
      {response.map((treatment)=>{
        return(
          <p>{treatment}</p>
        )
      })}
    </div>

    
    <div>
      <h2>Duration</h2>
      {duration.map((treatment)=>{
        return(
          <p>{treatment}</p>
        )
      })}
     
    </div>


    <div>
      <h2>Counted medicines</h2>
      <SampleFun/> 
      <h2>Count</h2>      
   </div>
    
  </div>
)
}

export default Result