## HennaBloom Studio 
HennaBloom Studio is a simple web app where customers can browse henna designs and place orders. 
The artist uses a private admin dashboard to manage designs—adding, editing, or deleting them. 
Built with a clean, minimalist interface and modular architecture, the app showcases real-world CRUD 
functionality, seamless frontend-backend integration. 
It’s built with React, Express, MongoDB, and Axios to keep everything connected and easy to use.

## Back End git Repo
 https://github.com/savita-aher/HennaStudio_BackEnd

## ✨ Features
- Admin Dashboard 
- Add, edit, and delete henna designs
- Each design includes: title, style tag, price, and category
- Modular React components for form handling and display

## 📬 Contact Page Feature
- Provides a clean, responsive form for users to send inquiries or custom design requests.
- Captures name, email, phone number, message, and optional custom design image (via URL or file upload).
- Includes radio toggle to conditionally display upload options for custom designs.
- Submits data to backend via POST request and stores it in MongoDB using a validated schema.
- Styled with warm, minimalist branding to match HennaBloom Studio’s aesthetic.


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
- npm install axios
- Start backend: npm run dev
- Start frontend: npm run dev
- Visit http://localhost:3000 to view the app


## Commands Used :
-npm create vite@latest .
-select npx->react->javascript 


