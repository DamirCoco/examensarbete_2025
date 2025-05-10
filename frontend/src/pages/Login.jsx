import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5001/api/login', {
        email,
        password,
      });
      setToken(res.data.token);
      setError('');
      alert('Inloggning lyckades!');
    } catch (err) {
      console.error(err);
      setError('Fel e-post eller lösenord');
    }
  };

  return (
    <div>
      <h2>Logga in</h2>
      <input
        type="email"
        placeholder="E-post"
        value={email}
        onChange={e => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Lösenord"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Logga in</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {token && <p>Inloggad! Token: {token}</p>}
    </div>
  );
}

export default Login;
