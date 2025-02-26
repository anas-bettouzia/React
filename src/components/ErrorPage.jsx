import React from 'react';
import Header from './Header';
import notFoundImage from '../assets/notfound.jpg'; // Adjust the path as needed

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <img src={notFoundImage} alt="Page Not Found" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default ErrorPage;