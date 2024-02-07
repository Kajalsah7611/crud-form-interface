// EntryGrid.js
import React from 'react';

const EntryGrid = ({ entries }) => {
  return (
<>
    <h2>Entries</h2>
    <div className="grid">
     
      {entries.map((entry, index) => (
        <div key={index} className="entry">
          <p>Name: {entry.name}</p>
          <p>Address: {entry.address}</p>
          <p>Mobile Number: {entry.mobileNumber}</p>
          <p>Email: {entry.email}</p>
          <p>Message: {entry.message}</p>
        </div>
      ))}
    </div></>
  );
};

export default EntryGrid;
