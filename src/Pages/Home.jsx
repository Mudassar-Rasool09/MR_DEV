// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import Typewriter from 'typewriter-effect';
import fire from '../assets/wallpaperflare.com_wallpaper.jpg';

const Home = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div>
      <img
        src={fire}
        className="w-full h-[100vh] relative opl"
        alt="Background"
        loading="lazy" // Lazy loading the image
      />
      <div
        className={`Typing-text transition-all ease-out r ${
          darkMode ? 'text-white shadow-lg c' : 'text-black b'
        } text-center op absolute top-0 w-full h-full justify-center items-center flex flex-col`}
      >
        <div
          className={`text-4xl md:text-6xl lg:text-8xl ${
            darkMode ? 'text-white' : 'text-black'
          }`}
        >
          Welcome To Mr Developer
        </div>
        <div
          className={`text-2xl md:text-4xl lg:text-6xl op1 ${
            darkMode ? 'text-white' : 'text-black'
          }`}
        >
          Build websites using
          <Typewriter
            options={{
              strings: [
                'HTML',
                'CSS',
                'JAVASCRIPT',
                'REACT',
                'REDUX AND REDUX TOOLKIT',
                'FIREBASE FOR BACKEND',
                'GSAP FOR ANIMATION',
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
