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
import Details from "./Pages/Importes/ChildRoutes/Details"
import ImportsRun from "./Pages/Importes/ChildRoutes/ImportsRun";
import Selection from "./Pages/Importes/ChildRoutes/Selection";
import ImportDetails from "./Pages/Importes/ImportDetails";
import { Importes } from "./Pages/Importes/Importes";
import { Jobs } from "./Pages/Jobs/Jobs";
import { Login } from "./Pages/Login/Login";
import ErrorObject from "./Pages/MigSets/ChildRoute/Error Object/ErrorObject";
import Propertise from "./Pages/MigSets/ChildRoute/Propertise/Propertise";
import SourceObject from "./Pages/MigSets/ChildRoute/Source Object/SourceObject";
import TargetObject from "./Pages/MigSets/ChildRoute/Target Object/TargetObject";
import Transformation from "./Pages/MigSets/ChildRoute/Transformation/Transformation";
import MigsetRoutes from "./Pages/MigSets/MigsetRoutes";
import { MigSets } from "./Pages/MigSets/MigSets";
import NotFound from "./Pages/NotFound/NotFound";
import { Registration } from "./Pages/Registration/Registration";
import { OpenTab } from "./Pages/Scanner/OpenTab/OpenTab";
import { OpenTabDetails } from "./Pages/Scanner/OpenTab/OpenTabDetails/OpenTabDetails";
import { OpenTabObjects } from "./Pages/Scanner/OpenTab/OpenTabObjects/OpenTabObjects";
import { OpenTabRun } from "./Pages/Scanner/OpenTab/OpenTabRun/OpenTabRun";
import { Scanner } from "./Pages/Scanner/Scanner";
import RequireAuth from "./Shared/RequireAuth/RequireAuth";
import Add from "./Pages/Importes/ChildRoutes/Add";
import Test from "./Pages/NotFound/Test";

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
          <Route path="/scanner/openTab/" element={<OpenTab />}>
            <Route path="details" element={<OpenTabDetails />} />
            <Route path="run" element={<OpenTabRun />} />
            <Route path="objects" element={<OpenTabObjects />} />
          </Route>

          <Route path="/importers" element={<Importes />} />
          <Route path="/importers/importdetails" element={<ImportDetails/>} />
          <Route path="/importers/importdetails/" element={<ImportDetails />}>
            <Route path="details" element={<Details />} />
            <Route path="Add" element={<Add />} />
            <Route path="selection" element={<Selection />} />
            <Route path="import-runs" element={<ImportsRun />} />
          </Route>
          <Route path="/migsets" element={<MigSets />} />
          <Route path="/migsets/migsets-route" element={<MigsetRoutes/>} />
          <Route path="/migsets/migsets-route" element={<MigsetRoutes />}>
            <Route path="properties" element={<Propertise />} />
            <Route path="transformation" element={<Transformation />} />
            <Route path="source-object" element={<SourceObject />} />
            <Route path="target-object" element={<TargetObject />} />
            <Route path="error-object" element={<ErrorObject />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/help" element={<Help />} />

          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />}></Route>

          {/* Testing Routes */}
          <Route path="/loading" element={<Loading />} />
          <Route path="/test" element={<Test />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
