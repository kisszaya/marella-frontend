import { AuthTypes } from "entities/auth";

export interface UserState {
  // refreshToken: string | null;
  accessToken: string | null;
  user: {
    username: string;
    email: string;
    role: AuthTypes.UserRole;
    isEnabled: boolean;
  } | null;
}

export type Tokens = Pick<UserState, "accessToken">;
