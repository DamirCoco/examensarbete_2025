import React, { useState } from 'react';
import axios from 'axios';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [userId, setUserId] = useState('');

  const book = async () => {
    try {
      await axios.post('http://localhost:5000/api/book', {
        date,
        time,
        userId
      });
      alert('Bokning skickad!');
    } catch (err) {
      console.error('Fel vid bokning', err);
      alert('Bokningen misslyckades');
    }
  };

  return (
    <div>
      <h2>Boka tid</h2>
      <input
        type="text"
        placeholder="Datum (t.ex. 2025-05-10)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tid (t.ex. 14:00)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Användar-ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={book}>Boka</button>
    </div>
  );
}

export default BookingForm;
