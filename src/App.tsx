import { RoutesPage } from "./routes";
import { AntecipationProvider } from "./context";
import "./style/reset.css";
import "./style/global.css";

function App() {
  return (
    <AntecipationProvider>
      <RoutesPage />
    </AntecipationProvider>
  );
}

export default App;
