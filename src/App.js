import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import {auth} from "./firebase"
import Home from "./components/Home";
import Create from "./components/Create";
import Login from "./components/Login";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"))
  return (
   <Router>
    <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth}/>}/>
      <Route path="/create" element={<Create isAuth={isAuth}/>}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
    </Routes>
   </Router>
  );
}

export default App;
