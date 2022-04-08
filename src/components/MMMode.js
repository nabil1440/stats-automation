import React from 'react';

// This is Ihsan's part too
import '../Ihsan.css';

const MMMode = () => {
  return (
    <div className='row-m'>
      <div className='box'>
        <div className='text_M'>MEAN</div>
        <div className='value'></div>
      </div>
      <div className='box'>
        <div className='text_M'>MEDIAN</div>
        <div className='value'></div>
      </div>
      <div className='box'>
        <div className='text_M'>MODE</div>
        <div className='value'></div>
      </div>
    </div>
  );
};

export default MMMode;
