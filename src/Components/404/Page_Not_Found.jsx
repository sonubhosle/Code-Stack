import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Page_Not_Found.css';

const Page_Not_Found = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Oops! Page not found</h2>
        <p className="error-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button className="back-home-btn" onClick={() => navigate('/')}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Page_Not_Found;
