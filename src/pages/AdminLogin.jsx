import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminPage.css'; 

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        //  Redirect to dashboard
        navigate(data.redirectTo); 
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="admin-page-container">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2 className="admin-login-title">Admin Login</h2>

        <input
          type="email"
          className="admin-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="admin-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="admin-login-button">
          Login
        </button>

        {error && <p className="admin-error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;