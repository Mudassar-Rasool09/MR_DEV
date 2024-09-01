// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { useSelector } from 'react-redux';

// Lazy load pages
const Home = lazy(() => import('./Pages/Home'));
const Contact = lazy(() => import('./Pages/Contact'));
const Project = lazy(() => import('./Pages/Project'));
const About = lazy(() => import('./Pages/About'));

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`cursor fixed w-4 h-4 rounded-full pointer-events-none transition-transform duration-75 transform -translate-x-1/2 -translate-y-1/2 ${
          darkMode ? 'bg-white shadow-lg' : 'bg-gray-800'
        }`}
      ></div>
      <Router>
        <Navbar />
        <div
          className={`ims bg w-[96%] h-[83.5vh] mt-6 rounded-md m-auto ${
            darkMode ? 'bg-black' : 'bg-white border-2 shadow-xl'
          } relative`}
        >
          <Suspense fallback={<div className=' w-full  h-full flex justify-center  items-center '> <span>Loading...</span> </div>}>
            <Routes>
              {/* <Route exact  path="MR_DEVELOPER/home" element={<Home />} /> */}
              <Route exact path="/home" element={<Home />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/contactus" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </>
  );
}

export default App;
