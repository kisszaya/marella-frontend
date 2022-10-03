import { Routing } from "features/routing";
import { withProviders } from "./providers";

import "./styles";

function App() {
  return (
    <div className="App">
      <Routing routes={[]} />
    </div>
  );
}

export default withProviders(App);
