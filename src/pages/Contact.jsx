import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="contact-page">
        <ContactForm />
      </main>
    </>
  );
};

export default Contact;