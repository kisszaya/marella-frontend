import { createAsyncThunk } from "@reduxjs/toolkit";

import { authAPI, AuthTypes } from "../api";
import { updateTokens } from "features/authorization";
import { AuthStateTypes } from ".";

const login = createAsyncThunk<
  AuthStateTypes.UserState | undefined,
  AuthTypes.LoginRequest
>("auth/login", async (values, { rejectWithValue }) => {
  const { data, status } = await authAPI.login(values);

  if (status !== 200) rejectWithValue("Problems with login");

  updateTokens({ access: data.accessToken, refresh: data.refreshToken });

  return data;
});

const setupApp = createAsyncThunk<AuthStateTypes.UserState | undefined, void>(
  "auth/setup",
  async (_, { rejectWithValue }) => {
    const { data, status } = await authAPI.refresh();
    if (status !== 200) rejectWithValue("Session expired, please login again");

    //TODO make request for /users/me
    updateTokens({ access: data.accessToken, refresh: data.refreshToken });
    return {
      accessToken: data.accessToken,
      user: {
        username: "default",
        role: "ROLE_USER",
        email: "default",
        isEnabled: true,
      },
    };
  }
);

const refreshToken = createAsyncThunk<AuthStateTypes.Tokens | undefined, void>(
  "auth/refresh",
  async (_, { rejectWithValue }) => {
    const { data, status } = await authAPI.refresh();
    if (status !== 200) {
      rejectWithValue("Session expired, please login again");
    }

    updateTokens({ access: data.accessToken, refresh: data.refreshToken });
    return { accessToken: data.accessToken };
  }
);

export { login, setupApp, refreshToken };
