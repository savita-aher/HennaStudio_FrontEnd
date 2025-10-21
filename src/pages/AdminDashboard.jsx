// src/components/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import AdminNav from '../components/AdminNavbar';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeTab, setActiveTab] = useState('contacts'); // 'design' | 'bookings' | 'contacts'

  useEffect(() => {
    if (activeTab === 'contacts') {
      fetch('http://localhost:3000/api/contact')
        .then(res => res.json())
        .then(data => setContacts(data))
        .catch(err => console.error('Error fetching contacts:', err));
    }
  }, [activeTab]);

  const handleDelete = (id) => {
    console.log('Delete contact:', id);
    // Add DELETE request logic here
  };

  const handleMarkDone = (id) => {
    console.log('Mark contact as done:', id);
    // Add PATCH request logic here
  };

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  return (
    <div className="dashboard-container">
      <h1>HennaBloom Admin Dashboard</h1>

      <AdminNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'contacts' && (
        <div className="contact-table-wrapper">
          <table className="contact-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Design</th>
                <th>Received</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phoneNumber}</td>
                  <td>{contact.message}</td>
                  <td>
                    {contact.customDesignImage && (
                      <img
                        src={`http://localhost:3000/uploads/${contact.customDesignImage}`}
                        alt="Custom Design"
                        className="table-image"
                      />
                    )}
                  </td>
                  <td>{new Date(contact.createdAt).toLocaleString()}</td>
                  <td className="action-cell">
                    <button
                      onClick={() => toggleDropdown(contact._id)}
                      className="action-button"
                    >
                      ⋮
                    </button>
                    {dropdownOpen === contact._id && (
                      <div className="dropdown-menu">
                        <button onClick={() => handleMarkDone(contact._id)}>Mark as Done</button>
                        <button onClick={() => handleDelete(contact._id)}>Delete</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'design' && (
        <div style={{ marginTop: '2rem' }}>
          <p>✨ Design Library coming soon…</p>
        </div>
      )}

      {activeTab === 'bookings' && (
        <div style={{ marginTop: '2rem' }}>
          <p>📆 Bookings Overview coming soon…</p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;