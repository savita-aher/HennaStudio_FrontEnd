import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>404 — Page Not Found</h2>
      <p style={paragraphStyle}>
        The page you're looking for doesn't exist or you don't have access.
      </p>
      <button style={buttonStyle} onClick={handleGoHome}>
        Go to Home
      </button>
    </div>
  );
};

// Inline CSS styles 
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
  backgroundColor: '#fdf6f0',
  color: '#5c3d2e',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  padding: '2rem',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '1rem',
  color: '#b85c38',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  maxWidth: '500px',
  lineHeight: '1.6',
};

const buttonStyle = {
  marginTop: '2rem',
  padding: '0.6rem 1.2rem',
  backgroundColor: '#b85c38',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease',
};

export default NotFound;