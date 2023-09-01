import React from 'react';
import Navber from './Navber';
import '../App.css';
import SearchDivs from './Search/SearchDivs'
import Reviewbox from './Review/Reviewbox';



const Home2 = () => {
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
        <SearchDivs/>
            <div>
                <Reviewbox/>
            </div>

      </div>
    
  );
};

export default Home2;