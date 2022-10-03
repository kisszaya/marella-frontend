import { Routing } from "features/routing";
import { withProviders } from "./providers";

import "./styles/index.scss";
import { publicRoutes } from "./lib/routes";

function App() {
  return (
    <div className="App">
      <Routing routes={publicRoutes} />
    </div>
  );
}

export default withProviders(App);
