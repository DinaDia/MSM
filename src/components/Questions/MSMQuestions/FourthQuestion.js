
import { useState, useEffect } from "react";
import Header from "../../Header";

const FourthQuestion = ({fourthSubmit, fourthBack}) => {

  // const [medNo, setMedNo]=useState('');
  // const [med, setMed]=useState();
  // const [currentMed, setCurrentMed]=useState();


  const handleSubmit=(e)=>{
    e.preventDefault();
    fourthSubmit()
  };

  const GoBackFun=(e)=>{
    e.preventDefault();
    fourthBack();
  };

  const treatmentSection=[
    {
      id: "1", 
      treatmentName: "RECOGNISED ANTIDEPRESSANTS"
    },
    {
      id: "2",
      treatmentName: "RECOGNISED AUGMENTATION THERAPIES"
    },
    {
      id: "3",
      treatmentName: "ANTIPSYCHOTICS AND MOOD STABILISERS"      
    },
    {
      id: "4",
      treatmentName: "OTHER REPORTED TREATMENTS"      
    }
  ];

  const treatmentClass=[
    {
      id: "1", 
      treatmentID: "1",
      treatmentClassName: "RECOGNISED ANTIDEPRESSANTS"
    },
    {
      id: "2", 
      treatmentID: "2",
      treatmentClassName: "RECOGNISED ANTIDEPRESSANTS"    
    },
    {
      id: "3", 
      treatmentID: "3",
      treatmentClassName: "RECOGNISED ANTIDEPRESSANTS"    
    },
    {
      id: "3", 
      treatmentID: "3",
      treatmentClassName: "RECOGNISED ANTIDEPRESSANTS"    }
  ];
  const [treatmentType, setTreatmentType]=useState([]);
  const [treatment, setTreatment]=useState([]);
  
  useEffect(()=>{
    setTreatmentType(treatmentSection);

  }, [])
  return (
    <div>
        <Header/>

        <h2 className='headingTag'>Medication Information</h2>
            <form className='formStyle' onSubmit={handleSubmit}>

              <label>Treatment type</label>
              <select className='multiSelectStyle'
              placeholder="select Medicines"
              value={currentMed}
              onChange={(e)=>setCurrentMed(e.target.value)}
              >
                <option hidden value="0">Select treatment type</option>
                <option value="Med1">Med1</option>
                <option value="Med2">Med2</option>
                <option value="Med3">Med3</option>
                <option value="Med4">Med4</option>

             </select>
             
             <div className='smallerBoxButtonsDiv'>
              <button className='backButtons'
               onClick={GoBackFun}>
                   Cancel</button>
               <button className='rightButtons'>
                   Save</button>
             </div>
            </form>
    </div>
  )
}

export default FourthQuestion