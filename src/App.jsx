import React, {useState, useEffect} from "react";
//importing navbar
import Navbar from "./Navbar/Navbar";
// importing BrowserRouter
import { BrowserRouter } from "react-router-dom";
//importing Loader
import Loader from "./Loader/Loader.jsx";
//importing ScrollToTop
import ScrollToTop from "./ScrollToTop/ScrollToTop.jsx";


const App = () => {
  // use state for loader
  const [loading, setLoading] = useState(true);

  //use effect for loader
  useEffect(() => {
    // Simulate a loading time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
