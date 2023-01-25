import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Login from './Home/Login/Login';
import SignUp from './Home/Login/SignUp';
import Dashboard from './Home/NavbarRoutes/Dashboard/Dashboard';
import Exclude from './Home/NavbarRoutes/Extraction/Exclude';
import Extraction from './Home/NavbarRoutes/Extraction/Extraction';
import Search from './Home/NavbarRoutes/Extraction/Search';
import Document from './Home/NavbarRoutes/Injection/Document';
import Injection from './Home/NavbarRoutes/Injection/Injection';
import UploadFile from './Home/NavbarRoutes/Injection/UploadFile';
import Reports from './Home/NavbarRoutes/Reports/Reports';
import Transformation from './Home/NavbarRoutes/Transformation/Transformation';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/extraction' element={<Extraction></Extraction>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/exclude' element={<Exclude></Exclude>}></Route>
        <Route path='/transformation' element={<Transformation></Transformation>}></Route>
        <Route path='/injection' element={<Injection></Injection>}></Route>
        <Route path='/document' element={<Document></Document>}></Route>
        <Route path='/upload' element={<UploadFile></UploadFile>}></Route>
        <Route path='/reports' element={<Reports></Reports>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
