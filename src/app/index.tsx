import { Routing } from "features/routing";

import { publicRoutes, userRoutes } from "./lib/routes";
import { AuthVerify, useAuthorization } from "features/authorization";

import "./styles/index.scss";

function App() {
  const { isLoading, role } = useAuthorization();

  if (isLoading) return <div>Loading...</div>;

  return role === "UNAUTHORIZED" ? (
    <Routing routes={publicRoutes} />
  ) : (
    <>
      <Routing routes={userRoutes} />
      <AuthVerify />
    </>
  );
}

export default App;
