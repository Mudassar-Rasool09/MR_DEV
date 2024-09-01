// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { gsap } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/Reducer";

const pages = ["Home", "About Us", "Projects", "Contact Us"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navRef = useRef(null);
  const linkRefs = useRef([]);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { backgroundPosition: "100% 0%" },
      {
        backgroundPosition: "0% 0%",
        duration: 4,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      }
    );

    linkRefs.current.forEach((link, index) => {
      gsap.fromTo(
        link,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
        }
      );
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        sidebarRef.current,
        { x: "-100%" },
        { x: "0%", duration: 0.3, ease: "power3.out" }
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: "-100%",
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav
      ref={navRef}
      className={`p-5 shadow-lg w-[96%] m-auto mt-3 rounded-lg iu mb-4 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-white to-gray-200 text-black"
      } bg-[length:200%_100%]`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 md:p-0">
        <div className="text-xl font-bold .glitch-wrapper "> MR DEVELOPER  </div>
        <div className="hidden md:flex space-x-8 items-center">
          {pages.map((val, index) => (
            <Link
              key={val}
              to={val.toLowerCase().replace(/\s+/g, "")}
              className={` relative group ${
                darkMode ? "text-white" : "text-black"
              }`}
              ref={(el) => (linkRefs.current[index] = el)}
            >
              {val}
              <span
                className={`absolute bottom-0 left-0 w-0 h-1 ${
                  darkMode ? "bg-white " : "bg-black"
                } group-hover:w-full transition-all duration-300`}
              ></span>
            </Link>
          ))}
          <button
            onClick={handleThemeToggle}
            className={`ml-4 p-2 rounded-full focus:outline-none ${
              darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleSidebar}
            className={`focus:outline-none ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-full ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        } shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="text-2xl font-bold mb-8">Menu</div>
          {pages.map((val) => (
            <Link
              key={val}
              to={val.toLowerCase().replace(/\s+/g, "")}
              className="block hover:text-blue-500 mb-4 text-lg"
              onClick={toggleSidebar}
            >
              {val}
            </Link>
          ))}
          <button
            onClick={handleThemeToggle}
            className={`mt-8 w-full flex items-center justify-center p-2 rounded-full focus:outline-none ${
              darkMode
                ? " bg-black  text-white border-1   border-white "
                : "bg-gray-200 text-black outline-1"
            }`}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            <span className="ml-2">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
