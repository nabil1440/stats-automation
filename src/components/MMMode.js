import React, { useContext, useEffect, useState } from 'react';

// Context
import { GlobalContext } from '../context/store';
// Mean, median, mode functions
import {
  calculateMean,
  calculateMedian,
  calculateMode
} from '../utils/central';

// This is Ihsan's part too
import '../Ihsan.css';

const MMMode = () => {
  const { tableData } = useContext(GlobalContext);

  const [mean, setMean] = useState(null);
  const [median, setMedian] = useState(null);
  const [mode, setMode] = useState(null);

  useEffect(() => {
    setMean(calculateMean(tableData));
    setMedian(calculateMedian(tableData));
    setMode(calculateMode(tableData));
  }, [tableData]);

  useEffect(() => {
    console.log({ mean, median, mode });
  }, [mean, median, mode]);

  return (
    <div className='row-m'>
      <div className='box'>
        <div className='text_M'>MEAN</div>
        <div className='value'>{mean ? mean : <></>}</div>
      </div>
      <div className='box'>
        <div className='text_M'>MEDIAN</div>
        <div className='value'>{median ? median : <></>}</div>
      </div>
      <div className='box'>
        <div className='text_M'>MODE</div>
        <div className='value'>{mode ? mode : <></>}</div>
      </div>
    </div>
  );
};

export default MMMode;
