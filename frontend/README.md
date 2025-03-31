# Figma Design to React.js (Frontend)

This is the frontend part of the project. It uses **TypeScript** for type safety and integrates **React Query, React Hook Form, and Zod** for better state management, validation, and API handling.

---

## 🚀 **Tech Stack**

- **React** with TypeScript
- **React Query** (API Handling & Caching)
- **React Hook Form** (Form Handling & Validation)
- **Zod** (Schema Validation)
- **Tailwind CSS** (Styling)

---

## 📂 **Project Structure**

```
frontend/
│── src/
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom React hooks for business logic
│   ├── pages/        # Page-level components
│   ├── services/     # API handling using React Query
│   ├── utils/        # Utility functions
│   ├── App.tsx       # Main app component
│── public/           # Static assets
│── package.json      # Dependencies
│── tsconfig.json     # TypeScript configuration
│── tailwind.config.js # Tailwind CSS configuration
│── .env              # Environment variables
```

---

## ⚙️ **Setup Instructions**

### **1️⃣ Clone the repository**

```sh
git clone https://github.com/your-repo/frontend.git
cd frontend
```

### **2️⃣ Install dependencies**

```sh
npm install
```

### **3️⃣ Start the development server**

```sh
npm run dev
```

This will start the React app at http://localhost:5173/.

## 🛠 **How to Build for Production**

```sh
npm run build
```

The production-ready files will be in the `dist/` folder.

## ✅ **Running Tests**

To run unit tests, execute:

```sh
npm run test
```

## 📜 **API Integration**

The frontend communicates with the backend via React Query for efficient state management.

- All API calls are in `src/services/`
- Uses axios for requests
- Handles authentication with JWT tokens

## 📌 **Notes**

- Ensure the backend is running before testing authentication.
- Make sure the `.env` file is correctly configured.

## 📧 **Contact**

For questions, reach out via email: aryajeet.jha@gmail.com