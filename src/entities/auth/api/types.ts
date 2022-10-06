type UserRole = "ROLE_USER";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    username: string;
    email: string;
    role: UserRole;
    isEnabled: boolean;
  };
}

interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: "Bearer";
}

export type { LoginResponse, UserRole, LoginRequest, RefreshResponse };
