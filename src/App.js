// App.js
import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

import './App.css';
import EntryForm from './components/EntryForm';
import EntryGrid from './components/EntryGrid';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobileNumber: '',
    email: '',
    message: '',
  });

  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
const deleteTask = (id) => {
  // Filter out the entry with the given ID
  const updatedEntries = entries.filter((entry, index) => index!== id);
  // Update the entries state with the filtered entries
  setEntries(updatedEntries);
};



  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any input field is empty
    if (
      formData.name.trim() === '' ||
      formData.address.trim() === '' ||
      formData.mobileNumber.trim() === '' ||
      formData.email.trim() === '' ||
      formData.message.trim() === ''
    ) {
      setError('All fields are required');
      return;
    }

    // setEntries((prevEntries) => [...prevEntries, { ...formData, id: uuidv4() }]); // to generate unique ids for each entry
    setEntries((prevEntries) => [...prevEntries, { ...formData, id: prevEntries.length }]);
    setFormData({
      name: '',
      address: '',
      mobileNumber: '',
      email: '',
      message: '',
    });
    setError(''); // Clear the error state
  };

  return (
    <div className="App">
      <h1>CRUD Interface</h1>
     <h3 style={{color:'red'}}> {error && <p className="error">{error}</p>}</h3>
      <EntryForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <EntryGrid entries={entries} onDelete={deleteTask} />
    </div>
  );
}

export default App;
