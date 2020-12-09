import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div className = "container">
      <h1>Oups No result :'</h1>
      <Link to='/' className='btn'>
        Home
      </Link>
    </div>
  );
};

export default Error;