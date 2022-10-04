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

type UserRole = "ROLE_USER";

export type { LoginResponse, UserRole, LoginRequest };
