import { useEffect } from "react";
import { useLocation } from "react-router";

import { useActions, useAppSelector } from "features/hooks";

const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export const AuthVerify = () => {
  const location = useLocation();
  const { refreshToken } = useActions();
  const { accessToken } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) return;

    const decodedJWT = parseJwt(accessToken);
    if (decodedJWT.exp * 1000 < Date.now()) {
      refreshToken();
    }
  }, [accessToken, location, refreshToken]);

  return null;
};
