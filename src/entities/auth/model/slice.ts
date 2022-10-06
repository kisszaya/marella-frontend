import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { IReduxState } from "shared/utils";
import { authActions as actions, AuthStateTypes } from ".";
import { redux } from "shared/utils";

type IUserState = AuthStateTypes.UserState;
type ITokensState = AuthStateTypes.Tokens;
type IAuthState = IUserState & IReduxState;

const initialState: IAuthState = {
  user: null,
  error: null,
  isLoading: true,
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      redux.fulfilled(state);
      state.accessToken = null;
      state.user = null;
    },
  },
  extraReducers: {
    // login
    [actions.login.pending.type]: redux.pending,
    [actions.login.rejected.type]: redux.rejected,
    [actions.login.fulfilled.type]: (
      state,
      action: PayloadAction<IUserState>
    ) => {
      redux.fulfilled(state);
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },

    // setup
    [actions.setupApp.pending.type]: redux.pending,
    [actions.setupApp.rejected.type]: (state, action) => {
      redux.rejected(state, action);
      state.accessToken = null;
      state.user = null;
    },
    [actions.setupApp.fulfilled.type]: (
      state,
      action: PayloadAction<IUserState>
    ) => {
      redux.fulfilled(state);
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },

    // token
    [actions.refreshToken.pending.type]: redux.pending,
    [actions.refreshToken.rejected.type]: (state, action) => {
      redux.rejected(state, action);
      state.accessToken = null;
      state.user = null;
    },
    [actions.refreshToken.fulfilled.type]: (
      state,
      action: PayloadAction<ITokensState>
    ) => {
      state.accessToken = action.payload.accessToken;
    },
  },
});

const auth = authSlice.reducer;

const caseReducers = {
  logout: authSlice.actions.logout,
};

export { caseReducers, auth as default };
