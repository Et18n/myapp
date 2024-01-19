
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
// styles
// import './styles/Header.css'
// import './styles/Login.css'

 import "./assets/bootstrap/css/bootstrap.min.css"

  
 import "./assets/fonts/font-awesome.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return(
    <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>

    </BrowserRouter>

       
        
    </>



   );



}

export default App;
