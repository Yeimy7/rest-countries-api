import { useState } from "react";
import { Card } from "./components/Card";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { Search } from "./components/Search";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header mode={darkMode} setMode={setDarkMode} />
      <section className='controls'>
        <div className='wrapper'>
          <div className='controls-grid'>
            <Search mode={darkMode} />
            <Filter mode={darkMode}/>
          </div>
        </div>
      </section>
      <section className="flags">
        <div className="wrapper">
          <div className="flags-grid">
            <Card mode={darkMode}/>
            <Card mode={darkMode}/>
            <Card mode={darkMode}/>
            <Card mode={darkMode}/>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
