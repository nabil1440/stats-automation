import React from 'react';
import { Link } from 'react-router-dom';
// This is Ihsan's part
import '../Ihsan.css';

const Header = () => {
  return (
    <div className='header'>
      <div id="text">
        <a href="#home">TABLE</a>
        <a href="#home">CENTRAL TENDENCIES</a>
      </div>
      {/* Link Example: 
      <Link to='/results'>Results Page</Link> */}
    </div>
  );
};

export default Header;
