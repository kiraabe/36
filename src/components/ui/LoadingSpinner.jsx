import React from 'react';

const LoadingSpinner = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
