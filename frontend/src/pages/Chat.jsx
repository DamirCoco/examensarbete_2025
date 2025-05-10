import { useState, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [sender, setSender] = useState('');

  useEffect(() => {
    // Hämta alla meddelanden
    axios.get('http://localhost:5001/api/messages')
  .then(res => {
    setMessages(res.data);
  })
  .catch(error => {
    console.error('Det gick inte att hämta meddelanden', error);
  });
  }, []);

  const sendMessage = async () => {
    if (!text || !sender) return;
    try {
      const res = await axios.post('http://localhost:5001/api/message', { sender, text });
      setMessages([...messages, res.data]);
      setText('');
    } catch (error) {
      console.error('Det gick inte att skicka meddelandet', error);
    }
  };

  return (
    <div>
      <h2>Chatt</h2>
      <input
        type="text"
        placeholder="Ditt namn"
        value={sender}
        onChange={e => setSender(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Skriv ett meddelande..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button onClick={sendMessage}>Skicka</button>

      <div style={{ marginTop: '20px' }}>
        <h3>Meddelanden</h3>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat; 