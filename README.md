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

Author
Iswarya A
this website is build with React.js,Node.js,Express.js.
feedback and suggestions are always welcome
github link:https://github.com/ishu122004
linked profile:https://www.linkedin.com/in/iswarya-a-036902356/
     
