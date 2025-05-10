const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  time: String,
  date: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Booking', BookingSchema);
