'use client';
import React, { useEffect, useState } from 'react'
import { CiLight } from 'react-icons/ci';
type TMode = 'light' | 'night';
function ThemeSwitcher() {
    const [mode, setMode] = useState<TMode>('night');
    useEffect(() => {
      const storedMode = localStorage.getItem('mode');
     
      if (!storedMode) {
        setMode('light');
        localStorage.setItem('mode', 'night');
      } else {
        setMode(storedMode as TMode);
      }
    }, []);
    const changeMode = () => {
        const htmlElement = document.documentElement;
 
        if (mode === 'light' || !mode) {
          localStorage.setItem('mode', 'night');
          htmlElement.classList.add('dark');
          setMode('night');
        } else {
          localStorage.setItem('mode', 'light');
          htmlElement.classList.remove('dark');
          setMode('light');
        }
      };
    
      return (
        <button
          onClick={changeMode}
          className="text-4xl p-2 bg-gray-secondary rounded-full text-black dark:text-white"
        >
          {mode === 'light' ? (
            // <span>
            //   <MdDarkMode className="transition-transform rotate-180 duration-500" />
            // </span>
            <span className="transition-transform rotate-180 duration-500 text-primary-color">
              <CiLight />{' '}
            </span>
          ) : (
            <span className="transition-transform rotate-180 duration-500 ">
              <CiLight />{' '}
            </span>
          )}
        </button>
      );
}

export default ThemeSwitcher