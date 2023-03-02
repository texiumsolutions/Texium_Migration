import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Registration } from "./Pages/Registration/Registration";
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
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
