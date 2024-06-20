import "./App.scss";

import PersistentDrawerLeft from "./components/sidenav/SideNaav";
import { ContextData} from "./context/ContextData";
function App() {
  return (
    <>
      <ContextData>
        <PersistentDrawerLeft />
      </ContextData>
    </>
  );
}

export default App;
