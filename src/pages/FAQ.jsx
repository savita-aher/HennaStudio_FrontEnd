import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/FaqSection.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/faq')
      .then(res => res.json())
      .then(data => setFaqs(data))
      .catch(err => console.error('Failed to fetch FAQs:', err));
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq._id || index} className="faq-item">
              <button className="faq-question" onClick={() => toggle(index)}>
                {faq.question}
                <span className="faq-toggle">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div
                className="faq-answer"
                style={{ display: openIndex === index ? 'block' : 'none' }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;