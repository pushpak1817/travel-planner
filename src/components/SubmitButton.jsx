import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitButton = ({ tripDetails }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard', { state: { tripDetails } }); // Navigate to Dashboard with tripDetails
  };

  return (
    <button onClick={handleClick} className="submit-button">
      Submit Trip Details
    </button>
  );
};

export default SubmitButton;
