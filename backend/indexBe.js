const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./userRoutes');
const bookingRoutes = require('./bookingRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express(); 

app.use(cors({
  origin: '*',  // Tillåt alla domäner för felsökning
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));



app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', bookingRoutes);
app.use('/api', messageRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Servern körs!');
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Servern körs på port ${PORT}`));