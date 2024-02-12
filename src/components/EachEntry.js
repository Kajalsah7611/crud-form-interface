import React from 'react';
import '../App.css';

const EachEntry = ({entry, onDelete}) => {



  return (
<>
    <div className='entry'>
        <button onClick={onDelete}>Delete</button>
          <p>Name: {entry.name}</p>
          <p>Address: {entry.address}</p>
          <p>Mobile Number: {entry.mobileNumber}</p>
          <p>Email: {entry.email}</p>
          <p>Message: {entry.message}</p>
          </div>
          </>
  );
};

export default EachEntry;





