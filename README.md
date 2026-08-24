# 🎵 Spotify-Inspired Authentication Platform

A responsive Spotify-inspired authentication experience built as a full-stack web application using React.js and Express.js.

The project focuses on building a realistic multi-step signup flow, secure password handling, REST API communication, validation, and frontend-backend integration.

## 🚀 Live Demo

Frontend: https://vercel.com/ishu122004/musicflow-frontend

Backend API: https://musicflow-backend-0cja.onrender.com

## 📌 Features

- 🎵 Spotify-inspired responsive UI
- 🔐 Login authentication
- 📝 Multi-step signup process
- 📧 Email validation
- 🔑 Password and confirm-password validation
- 👤 User profile information
- ⚧ Gender selection
- 📋 Terms & conditions step
- 🔒 Password hashing using bcrypt
- 🔄 REST API communication using Axios
- 🛡️ Backend validation
- 🚫 Duplicate email checking
- ⚡ React Context API for shared form state
- 📱 Responsive design
- 🌐 Separate frontend and backend deployment

## 🧩 Signup Flow

The signup experience is divided into four steps:

### Step 1 — Email
Users enter and validate their email address.

### Step 2 — Password
Users create and confirm their password.

### Step 3 — Profile
Users provide:
- Name
- Date of birth
- Gender

### Step 4 — Terms & Conditions
Users review the registration information and complete signup.

After successful registration, the user is redirected to the login page.

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- Tailwind CSS
- React Router
- Axios
- Context API

### Backend
- Node.js
- Express.js
- bcrypt
- CORS
- REST API

### Deployment
- Vercel — Frontend
- Render — Backend

## 🔐 Authentication Flow

```text
React Frontend
      ↓
     Axios
      ↓
Express REST API
      ↓
Backend Validation
      ↓
bcrypt Password Hashing
      ↓
User Storage
      ↓
Authentication Response
      ↓
React Frontend

🔒 Security

Passwords are never stored as plain text.

Before storing a password, the backend hashes it using bcrypt.

During login, bcrypt compares the entered password with the stored hash.

const hashedPassword = await bcrypt.hash(password, 10);

const passwordMatch = await bcrypt.compare(
    password,
    existingUser.password
);

📁 Project Structure
project/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── index.js
│   └── package.json
│
└── README.md

🔌 API Endpoints
Signup
POST /signup

Example request:

{
  "email": "user@example.com",
  "password": "password123",
  "gender": "Woman"
}
Login
POST /login

Example request:

{
  "email": "user@example.com",
  "password": "password123"
}
🧪 Validation

The application handles:

Empty fields
Invalid email formats
Invalid passwords
Password confirmation mismatch
Duplicate email registration
User not found
Incorrect password
Server errors

💡 What I Learned

Building this project helped me understand how a frontend and backend communicate in a real application.

Key learning areas:

React component architecture
React Context API
React Router navigation
Controlled form inputs
Axios API requests
Express REST APIs
HTTP status codes
Backend validation
Password hashing
CORS
Debugging client-server communication
Environment-based deployment
Vercel + Render integration
🔮 Future Improvements
MongoDB database integration
JWT authentication
Protected routes
Persistent user sessions
Forgot password functionality
Email verification
OAuth login
User profile dashboard
Music discovery features
👩‍💻 Author

Iswarya A

B.E. Computer Science & Engineering

Interested in Frontend & Full-Stack Development.

⭐ If you find this project useful made by TailwindCSS,React.js,Node.js,Express.js

Feel free to explore the repository and give it a ⭐.
github link:https://github.com/ishu122004
linked profile:https://www.linkedin.com/in/iswarya-a-036902356/
     
