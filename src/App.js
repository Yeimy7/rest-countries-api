import { useState } from "react";
import { CountryGrid } from "./components/CountryGrid";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { useFetchAll } from "./hooks/useFetchAll";


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [category, setCategory] = useState('')
  const { data, loading } = useFetchAll(category);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header mode={darkMode} setMode={setDarkMode} />
      <section className='controls'>
        <div className='wrapper'>
          <div className='controls-grid'>
            <Search mode={darkMode} />
            <Filter mode={darkMode} setCategory={setCategory} />
          </div>
        </div>
      </section>
      <CountryGrid mode={darkMode} data={data} loading={loading} />
    </div>
  );
}

export default App;
