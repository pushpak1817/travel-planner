import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const { tripDetails } = location.state || {}; // Get trip details from location state

  return (
    <div>
      <h2>Dashboard</h2>
      {tripDetails ? (
        <>
          <h3>Your Trip Details</h3>
          <p>Departure Location: {tripDetails.from}</p>
          <p>Destination Location: {tripDetails.to}</p>
          <p>Date: {tripDetails.date}</p> {/* Access date from tripDetails */}
          {/* You can add more details here if needed */}
        </>
      ) : (
        <p>No trip details available.</p>
      )}
    </div>
  );
};

export default Dashboard;
