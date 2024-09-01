// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import gsap from "gsap";
import profileImage from "../assets/WhatsA.png"; // Replace with your image path
import blacklaptop from '../assets/white.jpg'
import html from '../assets/html.webp'
import css from '../assets/css.webp'
import java from '../assets/java.png'
import react from '../assets/react.svg'
import firebase from '../assets/firebase.webp'

const AboutUs = () => {
  const img = [
    html, css, java, react, firebase
  ];
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    gsap.fromTo(
      '.lps', // Target the correct class
      { y: -100, opacity: 0 }, // Initial state
      { y: 0, opacity: 1, duration: 1, ease: "bounce", yoyo: true } // Final state
    );
    gsap.fromTo(
      '.mki li', // Target the correct class
      { x: -300, opacity: 0 }, // Initial state
      { x: 0, opacity: 1, duration: 0.5, stagger: 2, yoyoEase: 'ease' } // Final state
    );
    gsap.fromTo(
      '.ki', // Target the correct class
      { right: 800, opacity: 0 }, // Initial state
      { right: -1000, opacity: 1, duration: 2.1, stagger: 1, ease: "expoScale(1, 2)" } // Final state
    );

  }, []);

  return (
    <>
      <img src={blacklaptop} className={`absolute h-full object-cover ${darkMode ? 'invert-[0]' : 'invert-[1]'} shadow-lg`} alt="Background" loading="lazy" />
      <div className="flex flex-row gap-4 md:flex-col lg:flex-col absolute top-1 right-0">
        {
          img.map((val) => (
            <img key={val} className="w-10 h-10 md:w-20 md:h-20 lg:w-28 lg:h-28 ki" src={val} alt="Skill" loading="lazy" />
          ))
        }
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 w-full h-screen z-0 a sm:gap-4 p-6 d ${darkMode ? "text-white bg-white" : "text-black bg-black"}`}>
        <div className="z-10 p-4 mt-2 fil">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold lps">Hello, {` I'm `} Mudassar</h1>
          <br />
          <div className="iop">
            <p className="text-sm sm:text-sm md:text-sm lg:text-2xl">
              A passionate web developer with 1 year of experience in building
              high-quality, responsive websites.
            </p>
            <br />
            <p className="text-sm md:text-xl lg:text-2xl mb-2">My skill set includes:</p>
            <ul className="text-sm md:text-md lg:text-md lg:text-xl list-disc list-inside space-y-2 mki">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux & Redux Toolkit</li>
              <li>Firebase for Backend</li>
              <li>GSAP for Animation</li>
            </ul>
            <br />
            <p className="text-sm md:text2xl lg:text-2xl">
              I specialize in creating user-friendly and efficient websites that
              meet modern web development standards.
            </p>
          </div>
        </div>
        <div className="m-auto">
          <img
            className="m absolute right-0 md:right-10 ld:right-14 bottom-2 z-0"
            src={profileImage}
            alt="Profile"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
