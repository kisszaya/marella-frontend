import { AuthTypes } from "../api";
import { api, routes } from "shared/api";

export const login = async (values: AuthTypes.LoginRequest) => {
  return await api.post<AuthTypes.LoginResponse>(routes.login, values);
};

export const refresh = async () => {
  const refresh = localStorage.getItem("refresh");
  return await api.get<AuthTypes.RefreshResponse>(
    routes.refresh
    //   {
    //   withCredentials: true,
    //   headers: {
    //     Cookie: `refresh: ${refresh};`,
    //   },
    // }
  );
};
