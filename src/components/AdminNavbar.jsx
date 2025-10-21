const AdminNavbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { label: 'Design Library', key: 'design' },
    { label: 'Bookings Overview', key: 'bookings' },
    { label: 'Inbox & Requests', key: 'contacts' },
  ];

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#f3e9e7',
    borderBottom: '1px solid #e0d4d4',
  };

  const buttonStyle = (isActive) => ({
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: isActive ? '#8b3d3d' : '#fff',
    color: isActive ? '#fff' : '#5c2c2c',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: isActive ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
    transition: 'all 0.2s ease',
  });

  return (
    <nav style={navStyle}>
      {tabs.map(tab => (
        <button
          key={tab.key}
          style={buttonStyle(activeTab === tab.key)}
          onClick={() => setActiveTab(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default AdminNavbar;
