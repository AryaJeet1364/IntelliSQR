import axios from "axios";
import { LoginRequest, LoginResponse } from "../types/authTypes";

// export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
//   const response = await axios.post(
//     "http://localhost:5000/api/auth/login",
//     data
//   );
//   return response.data;
// };

export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  console.log("🔹 Sending login request:", data); // Debugging step

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email: data.email, // ✅ Ensure the correct field name
        password: data.password,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log("✅ Login response:", response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "❌ Login error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};


