import React, { Suspense } from 'react';
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import { CardProvider } from "./CardContext";

// Dynamically import the pages
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Services = React.lazy(() => import("./Pages/Services"));
const Shop = React.lazy(() => import("./Pages/Shop"));
const Project = React.lazy(() => import("./Pages/Project"));
const Contact = React.lazy(() => import("./Pages/Contact"));

function App() {
  return (
    <>
      <CardProvider>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </CardProvider>
    </>
  );
}

export default App;
