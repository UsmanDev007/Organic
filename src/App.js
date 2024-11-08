import Navbar from "./Components/Navbar";
import {Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Shop from "./Pages/Shop";
import Project from "./Pages/Project";
import News from "./Pages/News";
import Footer from "./Components/Footer";
function App() {
  return (
   <>
       
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourteam" element={<Team />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/project" element={<Project />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer/>   
   </>    
  );
}

export default App;
