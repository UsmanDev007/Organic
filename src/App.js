import React, { Suspense, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import { CardProvider } from "./CardContext";
import CustomSkeleton from "./Components/CustomSkeleton";
// Dynamically import the pages
const Home = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Services = React.lazy(() => import("./Pages/Services"));
const Shop = React.lazy(() => import("./Pages/Shop"));
const Contact = React.lazy(() => import("./Pages/Contact"));

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return (
    <>
      <CardProvider>
        <Navbar />
        <Suspense fallback={<CustomSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </CardProvider>
    </>
  );
}

export default App;
