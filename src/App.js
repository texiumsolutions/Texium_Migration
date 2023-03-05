import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading/Loading";
import { Modal } from "./components/Modal/Modal";
import auth from "./firebase.init";
import { Configuration } from "./Pages/Configuration/Configuration";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Help } from "./Pages/Help/Help";
import { Home } from "./Pages/Home/Home";
import { Importes } from "./Pages/Importes/Importes";
import { Jobs } from "./Pages/Jobs/Jobs";
import { Login } from "./Pages/Login/Login";
import { MigSets } from "./Pages/MigSets/MigSets";
import NotFound from "./Pages/NotFound/NotFound";
import { Registration } from "./Pages/Registration/Registration";
import { Scanner } from "./Pages/Scanner/Scanner";
import RequireAuth from "./Shared/RequireAuth/RequireAuth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {!user ? (
        <>
          <Login />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/importers" element={<Importes />} />
          <Route path="/migsets" element={<MigSets />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/help" element={<Help />} />

          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound></NotFound>}></Route>

          {/* Testing Routes */}
          <Route path="/loading" element={<Loading />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
