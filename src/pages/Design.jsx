import React from 'react';
import Navbar from '../components/Navbar';
import DesignSection from '../components/DesignSection';
import '../styles/DesignSection.css';

const Design = () => {
  return (
    <>
       <Navbar />
      <main className="design-page">
        <h2>Explore Our Henna Designs</h2>
        <p>Browse by category</p>
        <DesignSection />
      </main>
    </>

  );
};



export default Design;