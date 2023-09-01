import React from 'react'
import FlightData from './FlightData'
import SearchDivs from './SearchDivs'
import '../../App.css';
import { useFormData } from '../FormDataProvider';



const Flights = () => {
  
  const { formData } = useFormData();
  
  console.log(formData);

    
  return (
    <div>
      
        <div className='empty-div-1'></div>

      
      <div>
        <div className='filter'>
          <label><input type="checkbox" name="option1"/>Etihad Airways</label>
          <label><input type="checkbox" name="option1"/>Etihad Airways</label>
          <label><input type="checkbox" name="option1"/>Etihad Airways</label>
          <label><input type="checkbox" name="option1"/>Etihad Airways</label>
          <label><input type="checkbox" name="option1"/>Etihad Airways</label>
        </div>

        <div className='flight-result'>
       


        </div>
      </div>
    </div>
  )
}

export default Flights