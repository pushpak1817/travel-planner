import React, { useState } from 'react';
import "../App.css";

const SearchForm = ({ onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(''); // New state variable for date
  const [showDetails, setShowDetails] = useState(false); // State to manage the visibility of further details

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ from, to, date }); // Include date in the data passed to onSearch
    setShowDetails(true); // Show further details when the form is submitted
  };

  return (
    <div className="search-form-container">
      {!showDetails ? ( // Conditional rendering based on showDetails state
        <form className="search-form" onSubmit={handleSubmit}>
          <label htmlFor="from" className="form-label">From:</label>
          <input 
            id="from"
            type="text" 
            value={from} 
            onChange={(e) => setFrom(e.target.value)} 
            placeholder="Enter departure location" 
            required 
            className="search-input"
          />
          <br />

          <label htmlFor="to" className="form-label">To:</label>
          <input 
            id="to"
            type="text" 
            value={to} 
            onChange={(e) => setTo(e.target.value)} 
            placeholder="Enter destination location" 
            required 
            className="search-input"
          />
          <br />

          <label htmlFor="date" className="form-label">Date:</label>
          <input 
            id="date"
            type="date" // Input type for date selection
            value={date}
            onChange={(e) => setDate(e.target.value)} 
            required 
            className="search-input"
          />
          <br />

          <button type="submit" className="search-button">
            Move Forward <span className="arrow-icon">→</span>
          </button>
        </form>
      ) : (
        <div className="further-details">
          <h2>Further Details</h2>
          <p>Departure Location: {from}</p>
          <p>Destination Location: {to}</p>
          <p>Date: {date}</p> {/* Display the selected date */}
          {/* You can add more details here as needed */}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
