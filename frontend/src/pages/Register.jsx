import { useState } from 'react';
import axios from 'axios';



function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  /* const handleRegister = async () => {
    try {
      const res = await router.post('http://localhost:5000/api/register', {
        name,
        email,
        password
      });
      setMessage(`Registrerad som ${res.data.name}`);
    } catch (error) {
      setMessage(error.response?.data || 'Något gick fel vid registrering.');
    }
  }; */

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5001/api/register', {
        name,
        email,
        password
      });
      setMessage(`✅ Registrerad som ${res.data.name}`);
    } catch (error) {
      if (error.response) {
        // Servern svarade med en statuskod utanför 2xx
        if (error.response.status === 400) {
          setMessage('⚠️ Ogiltiga uppgifter – kontrollera e-post eller lösenord.');
        } else if (error.response.status === 409) {
          setMessage('❌ E-postadressen är redan registrerad.');
        } else if (error.response.status === 500) {
          setMessage('🚨 Serverfel. Försök igen senare.');
        } else {
          setMessage(`❗ Fel: ${error.response.statusText}`);
        }
      } else if (error.request) {
        // Förfrågan skickades men inget svar togs emot
        setMessage('❌ Ingen kontakt med servern. Kontrollera att backend är igång.');
      } else {
        // Något gick fel innan requesten skickades
        setMessage(`⚠️ Fel: ${error.message}`);
      }
      console.error('Registreringsfel:', error);
    }
  };
  

  return (
    <div>
      <h2>Registrera dig</h2>
      <input
        type="text"
        placeholder="Namn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
      <input
        type="email"
        placeholder="E-post"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Lösenord"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleRegister}>Registrera</button>
      <p>{message}</p>
    </div>
  );
}

export default Register;


  