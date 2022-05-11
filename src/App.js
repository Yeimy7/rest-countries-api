import { Card } from "./components/Card";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="form">
        <div className="wrapper">
          {/* <Search /> */}
          <Filter/>
        </div>
      </section>
      <section className="main">
        <div className="wrapper">
          <div className="main-grid">
            <Card />
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;
