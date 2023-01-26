
import { current } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import Header from "../../Header";
import TreatmentList from "../../TreatmentList";

const FourthQuestion = ({fourthSubmit, fourthBack, addMore}) => {


      const [treatmentType, setTreatmentType]=useState([]);
      const [treatment, setTreatment]=useState([]);
      const [medicine, setMedicine]=useState([]);
      const [selectedMed, setSelectedMed]=useState("");
      const [selectedSection, setSelectedSection]=useState("");
      const [selectedClass, setSelectedClass]=useState("");
      const [currentTolerability, setCurrentTolerability]=useState("");
      const [currentAdherence, setCurrentAdherence]=useState("");
      const [currentResponse, setCurrentResponse]=useState("");
      const [currentDosage, setCurrentDosage]=useState("");
      const [currentDuration, setCurrentDuration]=useState("");

      const {treatmentSection, treatmentClass, medicineName }=TreatmentList();

      
      const handleSubmit=(e)=>{
        e.preventDefault(); 
        fourthSubmit(selectedSection, selectedClass, selectedMed, currentTolerability, 
          currentAdherence, currentResponse, currentDosage, currentDuration);  
      };

      const GoBackFun=(e)=>{
        e.preventDefault();
        fourthBack();
      };

      const handleMoreTreatment=(e)=>{
        e.preventDefault();
        

        addMore(selectedSection, selectedClass, selectedMed, currentTolerability, 
        currentAdherence, currentResponse, currentDosage, currentDuration);

        
        changeTreatmentSelection("");
        changeTreatmentClass("");
        setSelectedMed("");
        setCurrentTolerability("");
        setCurrentAdherence("");
        setCurrentResponse("");
        setCurrentDosage("");
        setCurrentDuration("");

  
      }

      
      const  changeTreatmentSelection=(id)=>{
        const section=treatmentClass.filter(trt=> trt.treatmentID === id);
        setTreatment(section);

        switch(id){
          case "1": 
          setSelectedSection('RECOGNISED ANTIDEPRESSANTS');
          break;

          case "2":
          setSelectedSection('RECOGNISED AUGMENTATION THERAPIES');
          break;

          case "3":
          setSelectedSection('ANTIPSYCHOTICS AND MOOD STABILISERS');
          break;

          case "4":
          setSelectedSection('OTHER REPORTED TREATMENTS');
          break;  

          default:
          setSelectedSection('No treatment');          
        }


      };
      
      const changeTreatmentClass=(id)=>{
        const treatmentss=medicineName.filter(trt=> trt.treatmentClassId=== id);
        setMedicine(treatmentss);   

        switch(id){
          case "1": 
          setSelectedClass('Selective Serotonin Reuptake Inhibitors');
          break;

          case "2":
          setSelectedClass('Tricyclic Antidepressants');
          break;

          case "3":
          setSelectedClass('Monoamine Oxidase Inhibitors');
          break;

          case "4":
          setSelectedClass('Tetracyclic Antidepressants');
          break;  
          
          case "5":
          setSelectedClass('Serotonin-Noradrenaline Reuptake Inhibitors');
          break;        
          
          case "6":
          setSelectedClass('Serotonin Modulators & StimulatorsSerotonin Modulators & Stimulators');
          break;

          case "7":
          setSelectedClass('Noradrenaline Reuptake Inhibitors');
          break;

          case "8":
          setSelectedClass('Noradrenaline & Dopamine Reuptake Inhibitors');
          break;

          case "9":
          setSelectedClass('Melatonin Agonists');
          break;

          case "10":
          setSelectedClass('Others');
          break;

          case "11":
          setSelectedClass('First and Second Line Therapies');
          break;

          case "12":
          setSelectedClass('Third Line Therapies');
          break;

          case "13":
          setSelectedClass('Atypical Antipsychotics');
          break;

          case "14":
          setSelectedClass('Typical Antipsychotics');
          break;

          case "15":
          setSelectedClass('Anticonvulsants');
          break;

          case "16":
          setSelectedClass('Treatments for depression and related mood disorders');
          break;

          case "17":
          setSelectedClass('Physical treatments');
          break;



          default:
          setSelectedSection('No treatment');
      }

      };

      
      useEffect(()=>{
        setTreatmentType(treatmentSection);
      }, 
      // eslint-disable-next-line 
      [])
      
      
      return (
      <div>
        <Header/>

        <h2 className='headingTag'>Medication Information</h2>
            <form className='formStyle' onSubmit={handleSubmit}>

              <label>Treatment type</label>
              <select className='multiSelectStyle'
              id="treatmentID"
              onChange={(e)=>changeTreatmentSelection(e.target.value)}
              >
                <option hidden value="0">Select treatment section</option>
                {
                    treatmentSection && 
                    treatmentSection !== undefined ?
                    treatmentSection.map((trt, index)=>{
                      return (
                        <option key ={index} value={trt.id}>{trt.name}</option>
                      )
                    }) :
                    "No treatment"                  
                }

             </select>

              <label>Treatment class</label>
              <select className='multiSelectStyle'
              id="treatmentClassId"
              onChange={(e)=>changeTreatmentClass(e.target.value)
              }
              >
                <option hidden value="0">Select treatment type</option>
                {

                    treatment && 
                    treatment !== undefined ?
                    treatment.map((trt, index)=>{
                      return (
                        <option key ={index} value={trt.id}>{trt.name}</option>
                      )
                    }) :
                    "No treatment"                 
                }

             </select>             

             <label>Medication name</label>
              <select className='multiSelectStyle'
              id="MedicineId"
              placeholder="select Medicines"
              value={selectedMed}
              onChange={(e)=>setSelectedMed(e.target.value)}
              >
                <option hidden value="0">Select medication</option>
                {

                    medicine && 
                    medicine !== undefined ?
                    medicine.map((trt, index)=>{
                      return (
                        <option key ={index} value={trt.name}>{trt.name}</option>
                      )
                    }) :
                    "No treatment"                 
                }

             </select>

             <label>Tolerability</label>  
             <select className='multiSelectStyle'
             value={currentTolerability} 
             onChange={(e)=>setCurrentTolerability(e.target.value)}
             >
              <option hidden>Select Tolerability</option>
              <option value="Good">Good</option>
              <option value="Mini side effects">Mini side effects</option>
              <option value="Moderate side effects">Moderate side effects</option>
              <option value="Severe side effects">Severe side effects</option>
            </select>           


            <label>Adherence</label>  
             <select className='multiSelectStyle'
             value={currentAdherence}
             onChange={(e)=>setCurrentAdherence(e.target.value)}
             >
              <option hidden>Select Adherence</option>
              <option value="<25%"> Less than 25%</option>
              <option value="25%-49%">25%-49%</option>
              <option value="50%-74%">50%-74%</option>
              <option value=">75%">More than 75%</option>
            </select>           

            <label>Response</label>  
             <select className='multiSelectStyle'
             value={currentResponse}
             onChange={(e)=>setCurrentResponse(e.target.value)}
             >
              <option hidden>Select Response</option>
              <option value="<25%"> Less than 25%</option>
              <option value="25%-49%">25%-49%</option>
              <option value="50%-74%">50%-74%</option>
              <option value=">75%">More than 75%</option>
            </select>           

            <label>Dosage</label>
            <input className='infoInputStyle' type="text"
            placeholder="Specify dosage"
            value={currentDosage} 
            onChange={(e)=>setCurrentDosage(e.target.value)}/>


            <label>Has taken the effective minimum dosage for at least 4 weeks? </label>
            <select className='multiSelectStyle'
             value={currentDuration}
             onChange={(e)=>setCurrentDuration(e.target.value)}
             >

              <option hidden>Duration</option>
              <option value="Yes"> Yes</option>
              <option value="No">No</option>

             </select>
              
             <div className='smallerBoxButtonsDiv'>
              <button className='backButtons'
               onClick={GoBackFun}>
                   Cancel</button>
               <button className='rightButtons'>
                   Save</button>
              <button className='addMoreButtons'
              onClick={handleMoreTreatment}>
                   Add</button>                   
             </div>
            </form>
    </div>
  )
}

export default FourthQuestion