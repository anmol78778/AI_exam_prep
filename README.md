# 🚀 AI Exam Prep & Notes Generator

An AI-powered web application that helps students generate structured study notes, topic explanations, quizzes, and learning materials instantly using Artificial Intelligence.

## 📌 Overview

AI Exam Prep & Notes Generator is designed to simplify exam preparation by automatically creating high-quality notes from user-provided topics. The platform leverages AI to generate concise explanations, organized study materials, and interactive learning content, reducing the time students spend creating notes manually.

## ✨ Features

### 📝 AI Notes Generation
- Generate detailed notes from any topic.
- AI-powered content creation.
- Structured and easy-to-read format.

### 📚 Topic-Based Learning
- Enter any academic topic.
- Receive organized explanations and key concepts.
- Suitable for quick revision.

### 📊 Visual Learning Support
- Mermaid diagrams for concept visualization.
- Flowcharts and structured representations.

### 📈 Progress Tracking
- Save generated notes.
- Access previous study sessions.
- Maintain learning history.

### 🔐 User Authentication
- Secure Signup/Login.
- JWT-based authentication.
- Protected routes.

### 💳 Credit System
- Credit-based note generation.
- Purchase credits through online payment integration.
- Usage tracking.

### 📱 Responsive Design
- Mobile-friendly UI.
- Modern and intuitive user experience.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- Axios
- Framer Motion
- Recharts
- Mermaid.js

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Razorpay Payment Gateway

### AI Integration
- Google Gemini API

---

## 🏗️ System Architecture

```text
User
  │
  ▼
React Frontend
  │
  ▼
Express Backend
  │
  ├── Authentication (JWT)
  ├── Credit Management
  ├── Notes Generation API
  └── Payment Integration
  │
  ▼
Gemini API
  │
  ▼
Generated Notes
  │
  ▼
MongoDB Storage
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/anmol78778/AI_exam_prep.git
cd AI_exam_prep
```

### Backend Setup

```bash
cd Backend
npm install
```

Create `.env`

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_secret

GEMINI_API_KEY=your_gemini_api_key

STRIPE_SECRET_KEY=your_key_id

STRIPE_WEBHOOK_SECRET=your_key_secret
```

Run Backend

```bash
npm run server
```

### Frontend Setup

```bash
cd Frontend
npm install
```

Create `.env`

```env
VITE_BACKEND_URL=http://localhost:5000
```

Run Frontend

```bash
npm run dev
```

---

## 📂 Project Structure

```text
AI_exam_prep
│
├── Frontend
    |
    src
│   ├── components
│   ├── pages
│   ├── context
│   ├── assets
│   └── App.jsx
│
├── Backend
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   ├── config
│   └── server.js
│
└── README.md
```

---

## 🔑 Key Learning Outcomes

This project demonstrates:

- Full Stack MERN Development
- REST API Design
- Authentication & Authorization
- Payment Gateway Integration
- AI API Integration
- State Management
- Responsive UI Design
- Database Design with MongoDB
- Real-world SaaS Application Architecture

---

## 🎯 Challenges Solved

- Managing AI-generated content efficiently.
- Secure user authentication using JWT.
- Credit-based access control.
- Payment verification workflow.
- Rendering AI-generated diagrams dynamically.
- Maintaining scalable backend architecture.

---

## 📸 Screenshots

Add screenshots here:

- Home Page
- Notes Generation Page
- History Dashboard
- Pricing Page
- Generated Notes View

---

## 🔮 Future Enhancements

- AI Quiz Generation
- Flashcard Creation
- PDF Export
- Multi-language Support
- Personalized Study Plans
- Voice-based Learning Assistant

---

## 👨‍💻 Author

**Anmol Kumar**

- Electronics & Communication Engineering
- Full Stack Developer
- DSA & System Design Enthusiast

LiveLink: https://ai-exam-prep-req.onrender.com
GitHub: https://github.com/anmol78778

---

## ⭐ If you like this project

Give it a star on GitHub and support the project!
