import { Card } from "./components/Card";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <section className='controls'>
        <div className='wrapper'>
          <div className='controls-grid'>
            <Search />
            <Filter />
          </div>
        </div>
      </section>
      <section className="flags">
        <div className="wrapper">
          <div className="flags-grid">
            <Card />
            <Card />
            <Card />
            <Card />
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
