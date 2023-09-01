import React from 'react';
import DataReview from './Datareview';
import '../../App.css'; 

const Reviewbox = () => {
  return (
    <div className='review-divs'>
      {DataReview.map((item, index) => (
        <div key={index} className='reviewboxs'>
          
          <p>{item.Highlights}</p>
          <img src={item["Spot Image"]} alt={item.Spot} />
          <p>{item.name}</p>
        
  
        </div>
      ))}
    </div>
  );
};

export default Reviewbox;
