import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Configuration } from "./Pages/Configuration/Configuration";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Home } from "./Pages/Home/Home";
import { Importes } from "./Pages/Importes/Importes";
import { Jobs } from "./Pages/Jobs/Jobs";
import { Login } from "./Pages/Login/Login";
import { MigSets } from "./Pages/MigSets/MigSets";
import { Registration } from "./Pages/Registration/Registration";
import { Scanner } from "./Pages/Scanner/Scanner";
import { NavBar } from "./Shared/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <div className="navbar_section">
        <NavBar />
      </div>
      
      <div className="content_section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/importers" element={<Importes />} />
          <Route path="/migsets" element={<MigSets />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
