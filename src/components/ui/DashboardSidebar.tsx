'use client';
import { AccountManagementRoutes } from '@/routes/dashboard';
import AdminDashboardRoutes from '@/routes/dashboard/admin';
import UserDashboardRoutes from '@/routes/dashboard/user';
import { IUser } from '@/types/user.type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface DashboardSideBarProps {
  userRole: string;
  userData:IUser
}

function DashboardSidebar({ userRole,userData }: DashboardSideBarProps) {
  const pathname = usePathname();
  
  let routes;

  switch (userRole) {
    case 'USER':
      routes = UserDashboardRoutes;
    case 'ADMIN':
      routes = AdminDashboardRoutes;
  }
  return (
    <div className="p-10 bg-primary-color h-full w-full flex flex-col justify-between">
      {/* Management */}
      <div>
        <h1 className="text-3xl text-white mb-4 font-bold">Management</h1>
        <ul className="space-y-4">
          {routes?.map((route) => (
            <Link href={route.href} key={route.href} className="block">
              <div className="flex items-center gap-2">
                <button
                  className={`text-3xl  p-3 ${pathname == route.href ? 'bg-white text-primary-color' : 'bg-[#fc927d] text-white'} rounded-full`}
                >
                  {<route.icon />}
                </button>
                <h2 className="text-xl font-semibold text-white">
                  {route.title}
                </h2>
              </div>
            </Link>
          ))}
        </ul>
      </div>

      {/* Management */}
      <div>
        <h1 className="text-3xl text-white mb-4 font-bold">Account</h1>
        <ul className="space-y-4">
          {AccountManagementRoutes(userRole,userData.username)?.map((route) => (
            <Link href={route.href} key={route.href} className="block">
              <div className="flex items-center gap-2">
                <button
                  className={`text-3xl  p-3 ${pathname == route.href ? 'bg-white text-primary-color' : 'bg-[#fc927d] text-white'} rounded-full`}
                >
                  {<route.icon />}
                </button>
                <h2 className="text-xl font-semibold text-white">
                  {route.title}
                </h2>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardSidebar;
