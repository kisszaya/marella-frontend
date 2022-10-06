import { useEffect } from "react";
import { useActions, useAppSelector } from "features/hooks";

export const useAuthorization = () => {
  const { setupApp } = useActions();
  const { user, isLoading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    setupApp();
  }, []);

  return { isLoading, role: user?.role ?? "UNAUTHORIZED" };
};
