import React from 'react';

const Admin = ({ users, onLogout }) => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={onLogout}>Logout</button>
      <h3>User Registrations</h3>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>
            {user.name} (ID: {user.userId}) - Events Applied: {user.events.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;