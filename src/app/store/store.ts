import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "entities/auth";

const reducers = combineReducers({ auth: authReducer });

export const store = configureStore({
  reducer: reducers,
});
