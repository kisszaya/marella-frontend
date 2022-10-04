import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthTypes } from "..";
import { authAPI } from "../api";

export const login = createAsyncThunk(
  "auth/login",
  async (values: AuthTypes.LoginRequest, { rejectWithValue }) => {
    const { data, status } = await authAPI.login(values);
    if (status === 200) {
      return data;
    }
    rejectWithValue("Cannot login");
  }
);
