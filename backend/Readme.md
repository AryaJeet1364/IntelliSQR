# Node.js Backend with Prisma

This is the backend for the React project, built using **Node.js, Express, and Prisma**. It provides **authentication** (register & login) and manages user data.

---

## 🚀 **Tech Stack**

- **Node.js** with TypeScript
- **Express.js** (API framework)
- **Prisma** (Database ORM)
- **JWT Authentication**
- **bcryptjs** (Password hashing)
- **dotenv** (Environment management)

---

## 📂 **Project Structure**

```
backend/
│── src/
│   ├── controllers/   # Business logic for API endpoints
│   ├── routes/        # Express routes
│   ├── middleware/    # Authentication & error handling middleware
│   ├── prisma/        # Database setup
│   ├── utils/         # Utility functions
│── prisma/
│   ├── schema.prisma  # Prisma database schema
│── package.json       # Dependencies
│── tsconfig.json      # TypeScript configuration
│── .env               # Environment variables
```

---

## ⚙️ **Setup Instructions**

### **1️⃣ Clone the repository**

```sh
git clone https://github.com/your-repo/backend.git
cd backend
```

### **2️⃣ Install dependencies**

```sh
npm install
```

### **3️⃣ Configure Environment Variables**

Create a `.env` file in the root directory and add:

```env
DATABASE_URL="URL"
JWT_SECRET="your_super_secret_key"
PORT=5000
```

### **4️⃣ Setup Database**

Run the following Prisma commands:

```sh
npx prisma generate
```

### **5️⃣ Start the backend server**

```sh
npm run dev
```

The server will run at http://localhost:5000/.

## 🛠 **API Routes**

### Auth Routes

| Method | Endpoint | Description |

| --------- | ---------- | ------------- |

| POST  | /auth/register | Register new user |

| POST | /auth/login | Login user & get JWT |

## ✅ **Running Tests**

To run unit tests:

```sh
npm run test
```

## 📌 **Notes**

- Ensure the `.env` file is correctly configured.
- The frontend should be running at http://localhost:5173/ for API requests.

## 📧 **Contact**

For support, email: aryajeet.jha@gmail.com