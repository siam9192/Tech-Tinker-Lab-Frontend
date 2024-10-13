'use client';
import UserRoutes from '@/routes/user';
import { IRoute } from '@/types/global.type';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LogoutButton from './LogoutButton';
import { usePathname } from 'next/navigation';
import SignInButton from './SignInButton';
import {  getCurrentUserData } from '@/services/authService';
import { IUser } from '@/types/user.type';


const Sidebar = () => {
  const [currentUser, setCurrentUser] = useState<IUser|null>();
  const [isLoading,setIsUserLoading] = useState(true)
  let routes = UserRoutes;
  const pathname = usePathname();
  

  useEffect(() => {
    getCurrentUserData().then(res=>{
      setCurrentUser(res)
      setIsUserLoading(false)
    })
  }, []);

  const logoutSuccessFn = () => {
    setCurrentUser(null);
    window.location.pathname = '/'
  };

  if(isLoading){
    return <></>
  }
 
  return (
    <section className="flex flex-col justify-between p-10 h-full ">

      <div className="flex items-center gap-2">
        <img
          src="/images/TechTinkerLabLogo.jpg"
          className="size-20 rounded-full"
          alt=""
        />
        <h1 className="text-2xl text-wrap  font-bold">TechTinker Lab</h1>
      </div>
      <div className="space-y-4">
        {routes.map((route) =>{

          if(route.href === '/profile'){
            if(currentUser){
              route.href = `/profile/${currentUser.username}`
            }
            
            else {
              route.href =  `/auth/sign-in`
            }
          }
          else if(route.href === '/dashboard'){
            if(currentUser){
              route.href = `/dashboard/${currentUser.role.toLowerCase()}`
            }
            
            else {
              route.href =  `/auth/sign-in`
            }
          }

          return <Link href={route.href} key={route.href} className="block">
          <div className="flex items-center gap-2">
            <button
              className={`text-3xl  p-3 ${pathname == route.href ? 'bg-white text-primary-color' : 'bg-[#fc927d] text-white'} rounded-full`}
            >
              {<route.icon />}
            </button>
            <h2 className="text-xl font-semibold text-black">
              {route.title}
            </h2>
          </div>
        </Link>
        })}
      </div>
      <div className="space-y-2">
        {currentUser ? (
          <LogoutButton successFn={logoutSuccessFn} />
        ) : (
          <SignInButton />
        )}
      </div>
    </section>
  );
};

export default Sidebar;
