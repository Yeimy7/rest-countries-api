import CountryState from "./context/country/countryState";
import ModeState from "./context/mode/modeState";
import { AppRouter } from "./router/AppRouter";

function App() {

  return (
    <ModeState>
      <CountryState>
        <AppRouter />
      </CountryState>
    </ModeState>
  );
}

export default App;
