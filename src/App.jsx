import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Hero from "./pages/Hero";
import About from "./pages/About";
import { Navlayout } from "./layout/Navlayout";
import Loader from "./pages/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to manage the loading screen

  useEffect(() => {
    // Timer for 4 seconds to show the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4000 ms = 4 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        // Display the loading page for 4 seconds
        <Loader />
      ) : (
        // Render the app's main content after 4 seconds
        <BrowserRouter>
          <Routes>
            <Route element={<Navlayout />}>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
