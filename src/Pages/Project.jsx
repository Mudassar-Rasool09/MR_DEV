import React, { useEffect, useRef, useState } from 'react';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import burger from '../assets/burger.jpg';
import breat from '../assets/breast.jpg';
import landing from '../assets/landing.jpg';
import wild from '../assets/Wild.jpg';
import bird from '../assets/Bird.webp';
import breef from '../assets/cat.gif';
import bur from '../assets/Burgergif.gif';
import breast from '../assets/breast.gif';

const projects = [
  { id: 1, title: 'Project 1', description: 'This is the first project.', color: 'bg-red-600', img: wild, gif: bird },
  { id: 2, title: 'Project 2', description: 'This is the second project.', color: 'bg-green-400', img: breat, gif: breast },
  { id: 3, title: 'Project 3', description: 'This is the third project.', color: 'bg-orange-400', img: burger, gif: bur },
  { id: 4, title: 'Project 4', description: 'This is the fourth project.', color: 'bg-brown-400', img: landing, gif: breef },
];

const Project = () => {
  const projectRefs = useRef([]);
  const [currentProject, setCurrentProject] = useState(0);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const up = () => {
    if (currentProject > 0) {
      setCurrentProject((prev) => prev - 1);
    }
  };

  const down = () => {
    if (currentProject < projects.length - 1) {
      setCurrentProject((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const currentRef = projectRefs.current[currentProject];

    gsap.fromTo(
      currentRef,
      {  opacity: 0,  },
      {  opacity: 1,  duration: 2, ease: ' bounce ' , yoyo:true }
    );

    currentRef.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }, [currentProject]);


  return (
    <section className={`w-full h-full overflow-x-scroll scrollbar-hide ${darkMode ? 'bg-black text-white' : 'bg-slate-50 text-black'}`}>
      <div className='h-full flex items-center float-right absolute right-0 z-50'>
        <div className='flex items-center flex-col gap-2 sticky'>
          <button className='m-3 text-black' onClick={up}>
            <FaArrowCircleUp size={30} />
          </button>
          <button className='m-3 text-black' onClick={down}>
            <FaArrowCircleDown size={30} />
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        {projects.map((val, index) => (
          <div
            key={val.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`w-full h-[100%] flex flex-col items-center justify-center ${val.color} transition-transform duration-500 ease-out relative`}
          >
            <img className='w-full h-full object-cover' src={val.img} alt={val.title} />
            <div className=' flex justify-center flex-col items-center absolute h-full w-full sl ' >
            <img  className='  w-24 h-24   rounded-full la  ' src={val.gif} alt="" />
            <button   > Coming Soon  </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
