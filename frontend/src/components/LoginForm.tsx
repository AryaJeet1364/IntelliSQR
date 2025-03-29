import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "./Input";
import Button from "./Button";
import { useAuth } from "../hooks/useAuth";

// Schema Validation with Zod
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),  // ✅ Change 'uid' to 'email'
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { login, isLoading, errorMessage } = useAuth();

  const onSubmit = (data: LoginFormValues) => {
    login(data); // ✅ Now correctly sending { email, password }
  };

  return (
    <div className="bg-white p-10 rounded-lg shadow-md w-96">
      <h2 className="text-xl font-bold mb-5 text-center">
        <span className="bg-yellow-300 px-1">Welcome back!</span>
      </h2>

      {errorMessage && (
        <p className="text-red-500 text-sm text-center mb-4">{errorMessage}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"  // ✅ Update label
          type="email"   // ✅ Change type to 'email'
          name="email"   // ✅ Use 'email' instead of 'uid'
          register={register}
          error={errors.email?.message}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          register={register}
          error={errors.password?.message}
        />
        <Button type="submit" text={isLoading ? "Logging in..." : "Login"} />
      </form>
    </div>
  );
};

export default LoginForm;

