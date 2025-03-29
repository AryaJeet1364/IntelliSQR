import { Request, Response, NextFunction } from "express";
import prisma from "../prisma/client";
import { hashPassword, comparePassword } from "../utils/hash";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    res.status(201).json({ message: "User created", userId: user.id });
  } catch (error) {
    next(error); // Pass errors to Express error handler
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    // ✅ Validate if email and password are provided
    if (!email || !password) {
      res.status(400).json({ message: "Email and password are required" });
      return;
    }

    console.log("Received email:", email); // Debugging step

    // ✅ Query Database
    const user = await prisma.user.findUnique({ where: { email } });
    console.log(user);
    // ✅ Check if User Exists and Password is
    if (!user || !(await comparePassword(password, user.password))) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    // ✅ Generate JWT Token
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login Error:", error); // Debugging step
    next(error);
  }
};
