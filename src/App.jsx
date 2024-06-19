import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Signin from "./components/Signin"
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Slidebar from "./components/Slidebar";
import Signup from "./components/Signup";


function App() {

  return (
    <>
       <Router>
         <Routes>
           <Route path="/signin" element={<Signin/>}/>  
           <Route path="/signup" element={<Signup/>}/>  
           <Route path="/card" element={<Card/>}/>
           <Route path="/slidebar" element={<Slidebar/>}/>
           <Route path="/navbar" element={<Navbar/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
