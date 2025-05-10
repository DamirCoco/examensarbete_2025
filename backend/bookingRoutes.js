const express = require('express');
const router = express.Router();
const Booking = require('./models/Booking');

router.post('/book', async (req, res) => {
  const { date, time, userId } = req.body;
  try {
    const booking = new Booking({ date, time, user: userId });
    await booking.save();
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Något gick fel vid bokning' });
  }
});

module.exports = router;
