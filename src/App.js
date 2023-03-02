import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Pages/Login/Login";
import { Registration } from "./Pages/Registration/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
