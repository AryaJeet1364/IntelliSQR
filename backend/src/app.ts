import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import errorHandler from "./middlewares/errorHandler";

require('dotenv').config({path: '../env'});
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ Parses URL-encoded bodies

// Routes
app.use("/api/auth", authRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;
