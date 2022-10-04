import { AuthTypes } from "../api";
import { api, routes } from "shared/api";

export const login = async (values: AuthTypes.LoginRequest) => {
  return await api.post<AuthTypes.LoginResponse>(routes.login, values);
};
