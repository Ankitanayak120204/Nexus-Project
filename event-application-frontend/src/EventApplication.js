import React, { useState } from 'react';

const eventsList = ["Code", "Badminton", "Cricket", "Football"];

const EventApplication = ({ users }) => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [userId, setUserId] = useState('');

  const handleApply = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.userId === userId);
    if (user && selectedEvent) {
      user.events.push(selectedEvent);
      alert(`${user.name} applied for ${selectedEvent}`);
      setSelectedEvent('');
      setUserId('');
    } else {
      alert('User not found or no event selected');
    }
  };

  return (
    <form onSubmit={handleApply}>
      <h2>Apply for Events</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <select
        value={selectedEvent}
        onChange={(e) => setSelectedEvent(e.target.value)}
      >
        <option value="">Select an event</option>
        {eventsList.map((event) => (
          <option key={event} value={event}>{event}</option>
        ))}
      </select>
      <button type="submit">Apply</button>
    </form>
  );
};

export default EventApplication;