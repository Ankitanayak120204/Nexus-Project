import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && userId) {
      onRegister({ name, userId, events: [] });
      setName('');
      setUserId('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;