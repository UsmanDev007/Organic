import Navbar from "./Components/Navbar";
import {Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Shop from "./Pages/Shop";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import { CardProvider } from "./CardContext";

function App() {
  return (
   <>
     <CardProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </CardProvider>
   </>    
  );
}

export default App;
