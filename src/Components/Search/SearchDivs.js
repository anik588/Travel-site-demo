import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {useFormData} from '../FormDataProvider';


const SearchDivs = () => {
    //const [formData, setFormData] = useState('');
    const { formData, updateFormData }=useFormData();
    if (!formData) {
      // Handle the case where formData is not yet available
      return null; // or display a loading indicator
    }
      const handleInputChange = (e) => {

        const { id, value } = e.target;
        updateFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('formData:', formData);
    }
   
  return (
    <div>
        
      <div className='superdivs'>
      <form  onSubmit={handleSubmit}>
            <div class="containers">
        
                <div className='title'>From-TO</div>
                    <input type='text' id='book-start' placeholder='Lahor' onChange={handleInputChange} required/>

                    -  
                    <input type='text' id='book-stop' placeholder='Karachi' onChange={handleInputChange} required/>


                <FontAwesomeIcon icon={faRightLeft} className='home-icon-1'/>
                
            </div> 
            <div class="containers">
                <div className="title">Trip</div>
                <div> 
                    <select class="input-box" id='trip' onChange={handleInputChange}>
                        <option value="">Select Trip Type</option>
                        <option value="single">Single Trip</option>
                        <option value="round">Round Trip</option>
                    </select>
                </div>
            </div>
            <div class="containers">
            <div className="title">Depart-Return</div>
                    <input type="date" id='trip-time-Start' placeholder="Enter date"  onChange={handleInputChange}/>
                    -  
                    <input type="date" id='trip-time-end' placeholder="Enter date"  onChange={handleInputChange}/>
                </div>
            <div class="containers">
                <div className='title'  >Passenger-Class</div> 
                    <select className="input-box" id='passenger' onChange={handleInputChange}>
                        <option value="">Passenger</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <select className="input-box" id="class" onChange={handleInputChange}>
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="first">First Class</option>
                    </select>
                </div>
                
                <button className='btn' type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
                
           </div> 
           
    </div>
  )
}

export default SearchDivs