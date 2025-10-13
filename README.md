## HennaBloom Studio 
HennaBloom Studio is a simple web app where customers can browse henna designs and place orders. 
The artist uses a private admin dashboard to manage designs—adding, editing, or deleting them. 
Built with a clean, minimalist interface and modular architecture, the app showcases real-world CRUD 
functionality, seamless frontend-backend integration. 
It’s built with React, Express, MongoDB, and Axios to keep everything connected and easy to use.

## Back END git Repo
 https://github.com/savita-aher/HennaStudio_BackEnd

## ✨ Features
- Admin Dashboard 
- Add, edit, and delete henna designs
- Each design includes: title, style tag, price, and category
- Instant updates via Axios-powered API calls
- Modular React components for form handling and display

## Customer View (Public)
- Browse available henna designs
- Place orders with selected design and contact details
- Simple, intuitive layout for mobile and desktop users

## Backend Functionality
- RESTful API built with Express and MongoDB
- CRUD routes for designs, orders, and contact messages
- CORS-enabled for frontend communication
- Scalable model structure using Mongoose

## 🔗 Architecture Overview
- Frontend sends requests via Axios (axios.get, axios.post)
- Backend receives requests at /api/designs, /api/orders, etc.
- MongoDB stores design and order data
- State updates reflect instantly in the UI

## 🚀 Getting Started
- Clone the repo
- Run npm install in both client and server folders
- Start backend: npm run dev
- Start frontend: npm run dev
- Visit http://localhost:3000 to view the app


## Commands Used :
-npm create vite@latest .
-select npx->react->javascript 

<p>Total Price: ${totalPrice}</p>
<p className="note">
  This amount reflects the estimated cost, to be paid post-service.
</p>
.note {
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}
<label>
  <input
    type="radio"
    name="designStyle"
    value="custom"
    checked={designStyle === "custom"}
    onChange={handleDesignStyleChange}
  />
  Custom Design
</label>
{designStyle === "custom" && (
  <div className="upload-section">
    <label htmlFor="customDesignImage">Upload your design:</label>
    <input
      type="file"
      id="customDesignImage"
      name="customDesignImage"
      accept="image/*"
      onChange={handleImageUpload}
    />
  </div>
)}

