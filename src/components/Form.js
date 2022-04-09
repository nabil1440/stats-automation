import React, { useEffect, useState, useContext } from 'react';
// Functions
import { constructTable } from '../utils/calculation';
// This is Rafid's part
import '../Rafid.css';
// Context
import { GlobalContext } from '../context/store';

const Form = () => {
  // The logic is Nabil's part
  const [text, setText] = useState('');
  const [nums, setNums] = useState([]);

  // Global state data
  const { setTableData, formData, setFormData } = useContext(GlobalContext);

  useEffect(() => {
    if (formData) setText(formData);
  }, []);

  useEffect(() => {
    setFormData(text);
  }, [text]);

  const handleSubmit = e => {
    e.preventDefault();

    let arr = text.split(', ');
    arr = arr.map(num => parseInt(num));
    setNums(arr);
  };

  useEffect(() => {
    const table = nums.length > 0 ? constructTable(nums) : null;
    if (table) setTableData(table);
  }, [nums]);

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <textarea
          className='search-input'
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <button type='submit' className='submit-btn'>
          Calculate
        </button>
      </form>
    </div>
  );
};

export default Form;
