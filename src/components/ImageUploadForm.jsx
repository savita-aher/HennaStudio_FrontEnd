import React, { useState } from 'react';
import '../styles/ImageUploadForm.css'

const categories = ["hand", "feet", "bridal", "kids", "minimalist", "festive", "maternity", "mandala"];

const AdminUploadForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState("bridal");
  const [price, setPrice] = useState("");
  const [styleTag, setStyleTag] = useState("");
  const [message, setMessage] = useState(""); // ✅ feedback message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // clear previous message

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("styleTag", styleTag);

    try {
      const res = await fetch("https://hennastudio-backend.onrender.com/api/images/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Design uploaded successfully!");
        setImageFile(null);
        setPrice("");
        setStyleTag("");
      } else {
        setMessage("❌ Upload failed: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Upload failed:", err);
      setMessage("❌ Upload failed: Network error");
    }
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} required />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>
      <input type="text" placeholder="Style Tag" value={styleTag} onChange={e => setStyleTag(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
      <button type="submit">Upload Design</button>

      {message && <p className="upload-message">{message}</p>}
    </form>
  );
};

export default AdminUploadForm;