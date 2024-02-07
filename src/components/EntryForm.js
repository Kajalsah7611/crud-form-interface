// EntryForm.js
import React from 'react';

const EntryForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label>Address:</label>
      <input type="text" name="address" value={formData.address} onChange={handleChange} />

      <label>Mobile Number:</label>
      <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />

      <label>Email:</label>
      <input type="text" name="email" value={formData.email} onChange={handleChange} />

      <label>Message:</label>
      <input type="text" name="message" value={formData.message} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default EntryForm;
