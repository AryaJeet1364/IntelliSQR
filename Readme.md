# IntelliSQR Internship Application - Full Stack Project

## 🚀 Project Overview
This project is a full-stack web application for the **IntelliSQR Internship Application**, built using **React (Frontend)** and **Node.js with TypeScript & Prisma (Backend)**. It provides authentication functionality where users can register and log in securely.

## 🏗️ Technology Stack
### **Frontend (React + Vite + TypeScript)**
- **React** (with Vite for fast development)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Hooks** for state management
- **Vite** for fast bundling and hot-reloading

### **Backend (Node.js + Express + TypeScript)**
- **Node.js** (with Express.js for API handling)
- **TypeScript** for static typing
- **Prisma ORM** for database management
- **MongoDB** as the database
- **JWT Authentication** for user sessions
- **Bcrypt.js** for password hashing

---

## 📂 Project Structure

```
main-project/
│── backend/
│   ├── prisma/               # Prisma schema and database client
│   │   ├── schema.prisma     # Prisma schema definition
│   │   ├── client.ts         # Prisma client instance
│   ├── src/
│   │   ├── controllers/      # Business logic (Auth controller)
│   │   ├── middlewares/      # Error handling & auth middleware
│   │   ├── routes/           # Express routes for APIs
│   │   ├── utils/            # Utility functions
│   │   ├── app.ts            # Express app initialization
│   │   ├── server.ts         # Server startup script
│   ├── .env                  # Environment variables
│   ├── package.json          # Backend dependencies
│   ├── tsconfig.json         # TypeScript config
│
│── frontend/
│   ├── src/
│   │   ├── api/              # API service for frontend
│   │   ├── components/       # Reusable UI components
│   │   ├── hooks/            # Custom hooks
│   │   ├── pages/            # Page components (Login, Signup)
│   │   ├── types/            # Type definitions
│   ├── public/               # Static assets
│   ├── package.json          # Frontend dependencies
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   ├── vite.config.ts        # Vite configuration
│
│── README.md                 # Project documentation (this file)
```

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/intellisqr-internship-app.git
cd intellisqr-internship-app
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install  # Install dependencies
```

#### **Configure Environment Variables**
Create a `.env` file inside `backend/` and add:
```env
DATABASE_URL=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/
JWT_SECRET=your_secret_key
PORT=5000
```

#### **Run Prisma Migrations**
```bash
npx prisma migrate dev --name init
```

#### **Start Backend Server**
```bash
npm run dev
```
Backend should now be running at **http://localhost:5000**.

---

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install  # Install dependencies
```

#### **Configure Environment Variables**
Create a `vite-env.d.ts` file inside `frontend/` and add:
```env
VITE_API_BASE_URL=http://localhost:5000
```

#### **Start Frontend Server**
```bash
npm run dev
```
Frontend should now be running at **http://localhost:5173**.

---

## 🔗 API Endpoints
### **Auth Routes** (`/api/auth`)
| Method | Endpoint    | Description         |

|--------|------------|---------------------|

| POST   | /register  | Register new user  |

| POST   | /login     | User login         |


## 🔥 Features Implemented
✅ User Authentication (Register/Login)  
✅ Secure password storage with Bcrypt  
✅ JWT-based authentication  
✅ Prisma ORM with MongoDB  
✅ TypeScript for frontend & backend  
✅ Tailwind CSS for modern UI  
✅ Vite for fast frontend development  

---

## 🚀 Deployment
### **Backend Deployment** (Vercel / Railway / Render / AWS)
1. Push backend code to GitHub.
2. Use a platform like **Render, Vercel, or Railway** to deploy.
3. Update `DATABASE_URL` and `JWT_SECRET` in the environment settings.

### **Frontend Deployment** (Vercel / Netlify)
1. Push frontend code to GitHub.
2. Deploy on **Vercel or Netlify**.
3. Update `VITE_API_BASE_URL` to point to the live backend.

---

## 🤝 Contribution Guidelines
Want to contribute? Follow these steps:
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push branch (`git push origin feature-branch`)
5. Open a pull request 🚀

---

## 🏆 Acknowledgements
Special thanks to **IntelliSQR** for this internship opportunity! 🎯

