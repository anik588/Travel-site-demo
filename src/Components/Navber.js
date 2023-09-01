import React from 'react';
import { ReactComponent as LogoSvg } from './Logo.svg'; // Adjust the path accordingly
import '../App.css';
import { Link } from 'react-router-dom';


const Navber = () => {
  return (
    
    <nav>
      <Link to="/find-flights"><button className='button-top' >Find Flights</button></Link>
      <button className='button-top' >Find Hotels</button>
      <LogoSvg className='logo-1'/>
      <button className='button-login' >Logins</button> 
      <button className='button-signup' >Sign Up</button>
      </nav>
  )
}

export default Navber

// onClick={handleButton()}