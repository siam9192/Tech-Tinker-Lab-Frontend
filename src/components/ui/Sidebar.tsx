'use client';
import UserRoutes from '@/routes/user';
import { IRoute } from '@/types/global.type';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LogoutButton from './LogoutButton';
import { usePathname } from 'next/navigation';
import SignInButton from './SignInButton';
import { getCurrentUser, userLogout } from '@/services/authService';

interface ISideBar {
  routes?: IRoute[];
}

const Sidebar = () => {
  const [currentUser, setCurrentUser] = useState<any>();
  let routes = UserRoutes;
  const pathname = usePathname();

  useEffect(() => {
    getCurrentUser().then((res) => setCurrentUser(res));
  }, []);

  const logoutSuccessFn = () => {
    setCurrentUser(null);
  };

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
        {routes.map((route) => (
          <Link href={route.href} key={route.href} className="block">
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
        ))}
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
