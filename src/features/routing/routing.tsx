import { Navigate, Route, Routes } from "react-router";

import { IRoute } from ".";

interface Props {
  routes: IRoute[];
}

export const Routing = ({ routes }: Props) => {
  const defaultPath = routes.find((route) => route.default)?.path;

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
      {defaultPath && <Route element={<Navigate to={defaultPath} />} />}
    </Routes>
  );
};
