import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { CountryScreen } from '../components/country/CountryScreen';
import { MainScreen } from '../components/main/MainScreen';
import { Header } from '../components/ui/Header';

export const AppRouter = ({ mode, setMode }) => {

  return (
    <Router basename='/rest-countries-api'>
      <Header mode={mode} setMode={setMode} />
      <Routes>
        <Route path="/" element={<MainScreen mode={mode} setMode={setMode} />} />
        <Route path="/country/:countryId" element={<CountryScreen mode={mode} />} />
      </Routes>
    </Router>
  )
}
