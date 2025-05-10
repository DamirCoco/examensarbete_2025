const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Skicka meddelande
router.post('/message', async (req, res) => {
  try {
    const { sender, text } = req.body;
    if (!sender || !text) {
      return res.status(400).json({ error: 'Sender och text krävs' });
    }

    const message = new Message({ sender, text });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    console.error('Fel vid POST /message:', error);
    res.status(500).json({ error: 'Serverfel vid sparande av meddelande' });
  }
});

// Hämta meddelanden
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    console.error('Fel vid GET /messages:', error);
    res.status(500).json({ error: 'Serverfel vid hämtning av meddelanden' });
  }
});

module.exports = router;
