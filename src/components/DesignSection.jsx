import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  "hand", "feet", "bridal", "kids", "minimalist", "festive", "maternity", "mandala"
];

const DesignSection = () => {
  const [designs, setDesigns] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("bridal");
  const [bookingCart, setBookingCart] = useState([]);

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/designs");
        const data = await res.json();
        setDesigns(data);
      } catch (err) {
        console.error("Error fetching designs:", err);
      }
    };
    fetchDesigns();
  }, []);

  const filteredDesigns = designs.filter(d => d.category === selectedCategory);

  const handleAddToBooking = (design) => {
    if (!bookingCart.find(item => item._id === design._id)) {
      setBookingCart(prev => [...prev, design]);
    }
  };

  return (
    <>
      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat === selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="design-gallery">
        {filteredDesigns.map(design => (
          <div className="design-card" key={design._id}>
            <img src={design.imageUrl} alt={design.styleTag} />
            <h4>{design.styleTag}</h4>
            <p>Price: ${design.price}</p>
            <button onClick={() => handleAddToBooking(design)}>Add to Booking</button>
          </div>
        ))}
      </div>

      {bookingCart.length > 0 && (
        <div className="booking-preview">
          <h3>Your Booking Cart</h3>
          {bookingCart.map(item => (
            <div key={item._id} className="booking-item">
              <img src={item.imageUrl} alt={item.styleTag} />
              <p>{item.styleTag} – ${item.price}</p>
            </div>
          ))}
          <Link to="/book">
            <button className="lets-book-now">
              Let’s Book Now ({bookingCart.length})
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default DesignSection;