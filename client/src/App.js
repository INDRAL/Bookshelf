
import './App.css';
import {BrowserRouter,
  Routes,
  Route  ,Navigate} from "react-router-dom";
import Login from './login'
import Home from './Home';
import MyBookshelf from './MyBookshelf';
import Axios from "axios";

Axios.defaults.baseURL = "http://127.0.0.1:5000";
function App() {
  
    return (
    <BrowserRouter>
    <div className="wrapper">
    <Routes>
    <Route path= "/Home" element={<Home />}/> 
    <Route path="/Mybookshelf" element={<MyBookshelf />} />
     
    <Route path="/Login" element={<Login />} />
    <Route path="/" element={<Navigate replace to="/Home" />} />
    </Routes>
    </div>
    </BrowserRouter>
   );
 }
 


export default App;
