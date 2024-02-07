// App.js
import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries((prevEntries) => [...prevEntries, formData]);
    setFormData({
      name: '',
      address: '',
      mobileNumber: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="App">
      <h1>CRUD Interface</h1>
      <EntryForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <EntryGrid entries={entries} />
    </div>
  );
}

export default App;
