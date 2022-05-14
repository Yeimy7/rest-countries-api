import { useState } from "react";
import { CountryGrid } from "./components/CountryGrid";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { Search } from "./components/Search";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header mode={darkMode} setMode={setDarkMode} />
      <section className='controls'>
        <div className='wrapper'>
          <div className='controls-grid'>
            <Search mode={darkMode} />
            <Filter mode={darkMode} />
          </div>
        </div>
      </section>
      <CountryGrid mode={darkMode} />
    </div>
  );
}

export default App;
