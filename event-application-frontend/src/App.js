import React, { useState } from 'react';
import Register from './Register';
import EventApplication from './EventApplication';
import Admin from './Admin';

const App = () => {
  const [users, setUsers] = useState([]);
  const [adminMode, setAdminMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  
  const toggleAdminMode = () => {
    setAdminMode(!adminMode);
  };

  const handleUserRegistration = (user) => {
    setUsers([...users, user]);
  };

  const handleAdminLogin = (password) => {
    if (password === 'Admin') {
      setAdminMode(true);
    } else {
      alert('Incorrect Password');
    }
  };

  return (
    <div>
      <h1>Nexus Course Management System</h1>
      {!adminMode ? (
        <>
          <Register onRegister={handleUserRegistration} />
          <EventApplication users={users} />
          <button onClick={toggleAdminMode}>Admin Login</button>
        </>
      ) : (
        <Admin users={users} onLogout={toggleAdminMode} />
      )}
      {adminMode && (
        <div>
          <input
            type="password"
            placeholder="Admin Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
          <button onClick={() => handleAdminLogin(adminPassword)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;