'use client';
import React, { useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import Sidebar from './Sidebar';

function ResponsiveSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-3xl text-black dark:text-white"
      >
        <RiMenu2Line />
      </button>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className=" bg-gray-600/50 fixed inset-0 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white  w-10/12 h-full "
          >
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
}

export default ResponsiveSidebar;
