import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { CountryScreen } from '../components/country/CountryScreen';
import { MainScreen } from '../components/main/MainScreen';
import { Header } from '../components/ui/Header';
import modeContext from "../context/mode/modeContext";

export const AppRouter = () => {
  const darkModeContext = useContext(modeContext)
  const { darkMode} = darkModeContext

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Router basename='/rest-countries-api'>
        <Header />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/country/:countryId" element={<CountryScreen />} />
        </Routes>
      </Router>
    </div>

  )
}
