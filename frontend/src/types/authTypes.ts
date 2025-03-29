export interface LoginRequest {
  email: string; // ✅ Change 'uid' to 'email' to match backend expectations
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
  };
}
