import React, { useState, useEffect } from 'react';

const categories = [
  "hand", "feet", "bridal", "kids", "minimalist", "festive", "maternity", "mandala"
];

const DesignSection = () => {
  const [designs, setDesigns] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("bridal");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDesigns = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://hennastudio-backend.onrender.com/api/images/category/${selectedCategory}`);
        const data = await res.json();
        setDesigns(data);
      } catch (err) {
        console.error("Error fetching designs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDesigns();
  }, [selectedCategory]);

  return (
    <>
      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`tab ${cat === selectedCategory ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="spinner">Loading designs...</div>
      ) : designs.length === 0 ? (
        <div className="no-results">No designs found in this category.</div>
      ) : (
        <div className="design-gallery">
          {designs.map(design => (
            <div className="design-card" key={design._id}>
              <img src={design.imageUrl} alt={design.styleTag} />
              <h4 className="design-styleTag">Style : {design.styleTag}</h4>
              <p className="design-price">Price: ${design.price}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DesignSection;