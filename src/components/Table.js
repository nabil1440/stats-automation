import React, { useContext, useEffect } from 'react';

// This is Atique's part
import '../Atique.css';

// Context
import { GlobalContext } from '../context/store';

const Table = () => {
  const { tableData } = useContext(GlobalContext);

  const { classes, interval } = tableData;

  return (
    <div className='row'>
      <table>
        <caption>Frequency Distribution Table</caption>
        <thead>
          <tr>
            <th>Class</th>
            <th>Frequency</th>
            <th>Midpoint</th>
            <th>Cumulative Frequency</th>
          </tr>
        </thead>

        {classes ? (
          <tbody>
            {classes.map(range => (
              <tr key={Math.random()}>
                <td>
                  {range.lower}-{range.upper}
                </td>
                <td>{range.freq}</td>
                <td>{range.midPoint}</td>
                <td>{range.cumFreq}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <></>
        )}
      </table>
    </div>
  );
};

export default Table;
