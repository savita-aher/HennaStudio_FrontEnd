import React, { useState } from 'react';
import '../styles/ContactForm.css';
import Navbar from '../components/Navbar';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
    customDesignImage: '',
  });

  const [wantsCustomDesign, setWantsCustomDesign] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, customDesignImage: file.name }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Message sent successfully!');
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };

  return (
    <>
    <Navbar />
    <section className="contact-form">
      <h2>Let’s Connect</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required onChange={handleChange} />
        </label>

        <label>
          Email
          <input type="email" name="email" required onChange={handleChange} />
        </label>

        <label>
          Phone Number
          <input type="tel" name="phoneNumber" required onChange={handleChange} />
        </label>

        <label>
          Message
          <textarea name="message" rows="5" required onChange={handleChange} />
        </label>

        <fieldset >
          <legend>Do you have a custom design?</legend>
          <label>
            <input
              type="radio"
              name="customDesign"
              value="yes"
              onChange={() => setWantsCustomDesign(true)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="customDesign"
              value="no"
              onChange={() => setWantsCustomDesign(false)}
            />
            No
          </label>
        </fieldset>

        {wantsCustomDesign && (
          <>
            <label>
              Upload Image
              <input type="file" accept="image/*" onChange={handleFileUpload} />
            </label>
            <label>
              Or Paste Image URL
              <input type="text" name="customDesignImage" onChange={handleChange} />
            </label>
          </>
        )}

        <button type="submit">Send Message</button>
      </form>
    </section>
  </>
  );
};


export default ContactForm;