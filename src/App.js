import { useState } from "react";
import { AppRouter } from "./router/AppRouter";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <AppRouter mode={darkMode} setMode={setDarkMode} />
    </div>
  );
}

export default App;
