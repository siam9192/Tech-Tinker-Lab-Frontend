import DashboardSidebar from '@/components/ui/DashboardSidebar';
import DashboardSidebarButton from '@/components/ui/DashboardSidebarButton';
import { getCurrentUser, getCurrentUserData } from '@/services/authService';
import { ILayoutProps } from '@/types/global.type';
import React, { use } from 'react';

async function DashboardLayout({ children }: ILayoutProps) {
  const user = await getCurrentUser();
  const userData = await getCurrentUserData()
  return (
    <div className="lg:flex h-screen">
      <div className="w-[15%] hidden lg:block">
        <DashboardSidebar userRole={user?.role!} userData = {userData!} />
      </div>
      <div className=" lg:w-[85%] p-2 md:p-10 h-screen overflow-y-auto">
        <DashboardSidebarButton userRole={user?.role!} userData={userData!}/>
        {children}
        </div>
    </div>
  );
}

export default DashboardLayout;
