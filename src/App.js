import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Configuration } from "./Pages/Configuration/Configuration";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Home } from "./Pages/Home/Home";
import NotFound from "./Pages/Home/NotFound";
import { Importes } from "./Pages/Importes/Importes";
import { Jobs } from "./Pages/Jobs/Jobs";
import { Login } from "./Pages/Login/Login";
import { MigSets } from "./Pages/MigSets/MigSets";
import Loading from "./Shared/Loading/Loading";
import { Registration } from "./Pages/Registration/Registration";
import RequireAuth from "./Pages/Registration/RequireAuth";
import { Scanner } from "./Pages/Scanner/Scanner";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <RequireAuth><Home /></RequireAuth>
          
          } />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/importers" element={<Importes />} />
          <Route path="/migsets" element={<MigSets />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/loading" element={<Loading/>} />
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      
    </div>
  );
}

export default App;
