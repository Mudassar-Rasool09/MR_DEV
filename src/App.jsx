// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from 'react';
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

  return (
    <>
      <div className={`cursor ${darkMode ? 'bg-white shadow-lg' : 'bg-gray-800'}`}></div>
      <Router>
        <Navbar />
        <div className={`ims bg w-[96%] h-[83.5vh] mt-6 rounded-md m-auto ${darkMode ? 'bg-black' : 'bg-white border-2 shadow-xl'} relative`}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
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
