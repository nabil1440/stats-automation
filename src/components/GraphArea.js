import React, { useEffect, useContext, useState } from 'react';
// This is Nabil's area
// Graph
import { Chart as CharJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
// Context
import { GlobalContext } from '../context/store';
import { processData } from '../utils/processData';

const GraphArea = () => {
  const [data, setData] = useState(null);

  const { tableData } = useContext(GlobalContext);

  CharJS.register(...registerables);

  useEffect(() => {
    if (tableData) setData(processData(tableData));
  }, [tableData]);

  const options = {
    scales: {
      x: {
        ticks: {
          color: '#333'
        },
        grid: {
          color: '#ddd'
        }
      },
      y: {
        ticks: {
          color: '#465457'
        },
        grid: {
          color: '#ddd'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#465457'
        }
      }
    }
  };

  return (
    <div className='graph-row'>
      <h1 className='graph-heading'>Frequency Polygon</h1>
      {data ? <Line data={data} options={options} /> : <></>}
    </div>
  );
};

export default GraphArea;
