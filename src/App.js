// import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading/Loading";
import { Modal } from "./components/Modal/Modal";
// import auth from "./firebase.init";
import { Configuration } from "./Pages/Configuration/Configuration";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Help } from "./Pages/Help/Help";
import { Home } from "./Pages/Home/Home";
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
import { Imports } from "./Pages/Importes/Imports";
import { ImportsTab } from "./Pages/Importes/ImportsTab/ImportsTab";
import { ImportsDetails } from "./Pages/Importes/ImportsTab/ImportsDetails/ImportsDetails";
import ImportsAdd from "./Pages/Importes/ImportsTab/ImportsAdd/ImportsAdd";
import { ImportsSelection } from "./Pages/Importes/ImportsTab/ImportsSelection/ImportsSelection";
import { ImportsRuns } from "./Pages/Importes/ImportsTab/ImportsRuns/ImportsRuns";
import PropertiesDetails from "./Pages/MigSets/ChildRoute/Propertise/Child-Components/PropertiesDetails";
import ScanRunSelection from "./Pages/MigSets/ChildRoute/Propertise/Child-Components/ScanRunSelection";
import Exclution from "./Pages/MigSets/ChildRoute/Propertise/Child-Components/Exclution";
import AdvancedFilters from "./Pages/MigSets/ChildRoute/Propertise/Child-Components/AdvancedFilters";
import ObjectPreview from "./Pages/MigSets/ChildRoute/Propertise/Child-Components/ObjectPreview";
import Rules from "./Pages/MigSets/ChildRoute/Transformation/ChildRoutes/Rules";
import MappingList from "./Pages/MigSets/ChildRoute/Transformation/ChildRoutes/MappingList";
import Association from "./Pages/MigSets/ChildRoute/Transformation/ChildRoutes/Association";
import Demo from "./Pages/MigSets/ChildRoute/Transformation/ChildRoutes/Demo";

function App() {
  return (
    <div className="App">
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
        <Route
          path="/jobs"
          element={
            <RequireAuth>
              <Jobs />{" "}
            </RequireAuth>
          }
        />

        <Route
          path="/scanner"
          element={
            <RequireAuth>
              <Scanner />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/scanner/openTab/"
          element={
            <RequireAuth>
              <OpenTab />{" "}
            </RequireAuth>
          }
        >
          <Route path="details" element={<OpenTabDetails />} />
          <Route path="run" element={<OpenTabRun />} />
          <Route path="objects" element={<OpenTabObjects />} />
        </Route>

        <Route
          path="/imports"
          element={
            <RequireAuth>
              <Imports />
            </RequireAuth>
          }
        />
        <Route
          path="/imports/importsTab/"
          element={
            <RequireAuth>
              <ImportsTab />
            </RequireAuth>
          }
        >
          <Route path="details/:detailsId" element={<ImportsDetails />} />
          <Route path="add" element={<ImportsAdd />} />
          <Route path="selection" element={<ImportsSelection />} />
          <Route path="importRuns" element={<ImportsRuns />} />
        </Route>
        <Route
          path="/migsets"
          element={
            <RequireAuth>
              <MigSets />
            </RequireAuth>
          }
        />
        <Route
          path="/migsets/migsets-route"
          element={
            <RequireAuth>
              <MigsetRoutes />
            </RequireAuth>
          }
        >
          <Route path="properties" element={ <RequireAuth>
              <Propertise />
            </RequireAuth>} >
            <Route path="properties-details" element={<PropertiesDetails />} />
          <Route path="scan-run-selection" element={<ScanRunSelection />} />
          <Route path="exclution" element={<Exclution />} />
          <Route path="advanced-filters" element={<AdvancedFilters />} />
          <Route path="object-preview" element={<ObjectPreview />} />
          </Route>
          <Route path="transformation" element={<Transformation />} />
          <Route path="transformation" element={ <RequireAuth>
              <Transformation />
            </RequireAuth>} >
            <Route path="rules" element={<Rules />} />
          <Route path="mapping-list" element={<MappingList />} />
          <Route path="association" element={<Association />} />
          <Route path="demo" element={<Demo />} />
          </Route>
          <Route path="source-object" element={<SourceObject />} />
          <Route path="target-object" element={<TargetObject />} />
          <Route path="error-object" element={<ErrorObject />} />
        </Route>
  
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/configuration"
          element={
            <RequireAuth>
              <Configuration />
            </RequireAuth>
          }
        />
        <Route
          path="/help"
          element={
            <RequireAuth>
              <Help />
            </RequireAuth>
          }
        />

        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />}></Route>

        {/* Testing Routes */}
        <Route path="/loading" element={<Loading />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default App;
