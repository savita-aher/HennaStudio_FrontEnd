import { useState } from 'react';
import axios from 'axios';

export default function AdminAuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/login', {
        email,
        password
      });

      setMessage(res.data.message || 'Login successful');
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message || 'Invalid credentials');
      } else {
        setMessage('Server error');
      }
    }
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <h2 className="admin-title">Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      <p className="admin-message">{message}</p>
    </form>
  );
}