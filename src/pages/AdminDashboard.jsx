// src/components/AdminDashboard.jsx
import React, { useState } from 'react';
import AdminNav from '../components/AdminNavbar';
import '../styles/AdminDashboard.css';
import AdminUploadForm from '../components/ImageUploadForm';
import DesignManager from '../components/DesignManager';
import Navbar from '../components/Navbar';
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('design'); // added state

  return (
    <>
    <Navbar/>
    <div className="dashboard-container">
      <h1>HennaBloom Admin Dashboard</h1>

      <AdminNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'design' && (
        <div style={{ marginTop: '2rem' }}>
          <DesignManager />
        </div>
      )}

      {activeTab === 'bookings' && (
        <div style={{ marginTop: '2rem' }}>
          <p>Bookings Overview coming soon…</p>
        </div>
      )}

      {activeTab === 'contacts' && (
        <div style={{ marginTop: '2rem' }}>
          <p>Inbox & Requests coming soon…</p>
        </div>
      )}

      {activeTab === 'upload' && (
  <div style={{ marginTop: '2rem' }}>
    <AdminUploadForm />
  </div>
)}

    </div>
  </>
  );
};

export default AdminDashboard;