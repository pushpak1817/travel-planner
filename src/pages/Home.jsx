import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import BudgetCalculator from '../components/BudgetCalculator';
import HotelLinks from '../components/HotelLinks';
import SubmitButton from '../components/SubmitButton'; // Import SubmitButton

const Home = () => {
  const [plan, setPlan] = useState(null);
  const [tripDetails, setTripDetails] = useState(null); // State for trip details

  const handleSearch = (data) => {
    setPlan({ ...data });
    setTripDetails({ from: data.from, to: data.to }); // Set trip details
  };

  return (
    <div className="center-container">
      <div className="box">
        <h1>Welcome to Travel Planner</h1>
        <SearchForm onSearch={handleSearch} />

        {plan && (
          <>
            <BudgetCalculator budget={plan.budget} />
            <HotelLinks destination={plan.to} />
          </>
        )}

        {/* Render SubmitButton and pass tripDetails */}
        {tripDetails && <SubmitButton tripDetails={tripDetails} />}
      </div>
    </div>
  );
};

export default Home;
