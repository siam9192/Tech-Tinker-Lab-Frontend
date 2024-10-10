'use client';
import React, { useState } from 'react'
import { RiMenu2Line } from 'react-icons/ri';
import DashboardSidebar from './DashboardSidebar';
import { IUser } from '@/types/user.type';
interface DashboardSideBarProps {
    userRole: string;
    userData:IUser
  }
  
function DashboardSidebarButton(props:DashboardSideBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="text-3xl text-black dark:text-white block lg:hidden"
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
              <DashboardSidebar  {...props}/>
            </div>
          </div>
        )}
      </>
    )
}

export default DashboardSidebarButton