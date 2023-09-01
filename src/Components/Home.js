import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';
import Navber from './Navber';

import { useEffect } from 'react';
import '../App.css';

const Home = () => {
  const [selectedOption,setSelectedOption] = useState('');

  const handleTripChange=(e)=>{
    const selected = (e.target.value);
    setSelectedOption(selected)
  }
 


  // const [showContent, setShowContent] = useState(false);
  // const [buttonText,setbuttonText] = useState('Cancle');
  // const [formfilled,setformfilled] = useState(false)

  // const openDestinationDiv = () => {
  //   setShowContent(!showContent); // Toggle the showContent state
  // };

  // const handleInputChange=(e)=>{
  //   const allFieldsFill = e.target.form.checkValidity();
  //   setformfilled(allFieldsFill);
  // }

  //   useEffect(() => {
  //     if (formfilled){
  //       setbuttonText('Submit')
  //     }},
  //    [formfilled])
    
  
  return (
    
    <div>
        <div className='home-pic-1'>
        <Navber />
          <img
            src="../../image-home-top.png"
            alt="Not Found"
            style={{ width: '100%', backgroundPosition: 'center', backgroundSize: 'contain' }}
          />
        </div>
      <div className='home-booking-superdivs'>
                <div className='home-1'>
                      <div className='title'>From-TO</div>
                      <div className='home-2'>
                      
                        <input type='text' id='book-start' placeholder='Lahor'required></input>
                        -  
                        <input type='text' id='book-stop' placeholder='Karachi'required></input>
                        <FontAwesomeIcon icon={faRightLeft} className='home-icon-1'/>
                      </div>
                  </div>
                
                <div className='home-1'> 
                  <div className='title'>Trip</div>
                  <div className='home-2'>
                    <select value={selectedOption} onChange={handleTripChange} >
                    <option value="Single-Trip">Single-Trip</option>
                    <option value="Round-Trip">Round-Trip</option>
                    </select>
                  </div>
                </div>

                <div className='home-1'>
                <div className='title'>Departure-Return</div>
                  <div className='home-2'>
                    <input type="date" id='trip-time-Start' placeholder="Enter the date..." required/>
                    -  
                    <input type="date" id='trip-time-end' placeholder="Enter the date..." required/>

                  </div>
                </div>
              <div className='home-1'>
              <div className='title'>Passenger-Class</div>
              <div className='home-2'>
                <input type="text" id='Passenger' placeholder="1 person" required/>
                -  
                <input type="text" id='Class' placeholder="Economy" required/>

              </div></div>
      </div>
    </div>
    
  );
};

export default Home;

// {!showContent && (
//   <div className='home-book-div' onClick={openDestinationDiv}>
//     Lahor - Karachi <FontAwesomeIcon icon="fa-solid fa-right-left" />
//   </div>
// )}
// {showContent && (
//   <div style={{ backgroundColor: 'orange' }}>
//     <form className='booking-form-home'>
//       <input type='text' id='from' placeholder='Form' onChange={handleInputChange} required></input>
//       <input type='text' id='destination' placeholder='Destination' onChange={handleInputChange} required></input>
//     {buttonText &&
//     <button onClick={openDestinationDiv} type='submit' >{buttonText}</button>
//     }
//     </form>
//   </div>    
// )}
