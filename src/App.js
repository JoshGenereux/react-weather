import './App.css';
import Search from "./Search";
import Header from "./Header";
import {useState} from "react";

function App() {
const [search, setSearch] = useState(true)

  return (
    <div className="App">
      <Header />
      { search && <Search search={search} setSearch={setSearch}/>}
    </div>
  );
}

export default App;
