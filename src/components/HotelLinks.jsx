import React from 'react';
import "../App.css";

const HotelLinks = ({ destination }) => (
  <div className="hotel-links-container">
    <h2>Hotels in {destination}</h2>
    <ul>
      <li>
        <a href="https://booking.com" target="_blank" rel="noopener noreferrer">Booking.com</a>
      </li>
      <li>
        <a href="https://hotels.com" target="_blank" rel="noopener noreferrer">Hotels.com</a>
      </li>
    </ul>
  </div>
);

export default HotelLinks;
