import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { AppDispatch } from "app/store";
import { authActions } from "entities/auth";

const actionCreators = { ...authActions };

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(actionCreators, dispatch);
};
