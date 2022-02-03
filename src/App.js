import './App.css';
import Search from "./Search";
import Header from "./Header";
import {useState} from "react";
import WeatherCard from "./WeatherCard";

function App() {
const [search, setSearch] = useState(true)

  return (
    <div className="App">
      <Header />
      { search && <Search setSearch={setSearch}/>}
      {/*{ !search && <WeatherCard />}*/}
    </div>
  );
}

export default App;
