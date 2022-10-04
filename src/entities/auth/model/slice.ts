import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Nullable, ReduxState } from "shared/utils";
import { AuthTypes } from "../api";
import { authActions as actions } from ".";
import { redux } from "shared/utils";

type IAuthState = Nullable<AuthTypes.LoginResponse> & ReduxState;
const initialState: IAuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [actions.login.pending.type]: redux.pending,
    [actions.login.rejected.type]: redux.rejected,
    [actions.login.fulfilled.type]: (
      state,
      action: PayloadAction<AuthTypes.LoginResponse>
    ) => {
      return { ...action.payload, isLoading: false, error: "" };
    },
  },
});

export default authSlice.reducer;
