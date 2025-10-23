import React, { useEffect, useState } from 'react';
import '../styles/DesignManager.css';

const DesignManager = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchDesigns();
  }, []);

  const fetchDesigns = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/designs/all");
      const data = await res.json();
      setDesigns(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (design) => {
    setEditingId(design._id);
    setFormData({ styleTag: design.styleTag, price: design.price });
    setMessage("");
  };

  const handleUpdate = async () => {
    try {
      await fetch(`http://localhost:3000/api/designs/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setMessage("Design updated successfully!");
      setEditingId(null);
      fetchDesigns();
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/designs/${id}`, {
        method: "DELETE",
      });
      setMessage("Design deleted successfully!");
      fetchDesigns();
      setTimeout(() => setMessage(""), 2000);
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="design-manager">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="design-gallery">
          {designs.map((design) => (
            <div key={design._id} className="design-card">
              <img src={design.imageUrl} alt={design.styleTag} className="design-image" />
              <p style={{ fontSize: "0.8rem" }}>Style: {design.styleTag}</p>
              <p style={{ fontSize: "0.8rem" }}>Price: ${design.price}</p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button onClick={() => handleEditClick(design)}>Edit</button>
                <button onClick={() => handleDelete(design._id)}>Delete</button>
              </div>

              {editingId === design._id && (
                <div className="edit-form">
                  <label>Update StyleTag:</label>
                  <input
                    type="text"
                    value={formData.styleTag}
                    onChange={(e) =>
                      setFormData({ ...formData, styleTag: e.target.value })
                    }
                  />
                  <label>Update Price:</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: Number(e.target.value) })
                    }
                  />
                  <button onClick={handleUpdate}>Done</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {message && <p className="update-message">{message}</p>}
    </div>
  );
};

export default DesignManager;