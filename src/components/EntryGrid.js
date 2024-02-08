// EntryGrid.js
import React from 'react';

const EntryGrid = ({ entries, setEntries,index}) => {

  const deleteTask = (id) => {
    // Filter out the task with the given ID
    const updatedEntries = entries.filter(entry => index!== id);
    // Update the tasks state with the filtered tasks
    setEntries(updatedEntries);
  };

  return (
<>
    <h2>Entries</h2>
    <div className="grid">
     
      {entries.map((entry) => (
        <div key={index} className="entry">
          <button onClick={() => deleteTask(index)}>Delete</button>
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
