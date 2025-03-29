import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/auth";
import { useState } from "react";
import { LoginRequest } from "../types/authTypes";
import { AxiosError } from "axios"; // Import Axios error type

// Define a type for error response data
type ErrorResponse = {
  message?: string;
};

export const useAuth = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: async (data: LoginRequest) => await loginApi(data),
    onError: (error: AxiosError<ErrorResponse>) => {
      setErrorMessage(error.response?.data?.message || "Login failed!");
    },
  });

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
    errorMessage,
  };
};
