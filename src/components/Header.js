import React from 'react';
import { Link } from 'react-router-dom';
// This is Ihsan's part
import '../Ihsan.css';

const Header = () => {
  return (
    <div className='header'>
      <div id='text'>
        <Link to='/'>TABLE</Link>
        <Link to='results/'>CENTRAL TENDENCIES</Link>
      </div>
    </div>
  );
};

export default Header;
