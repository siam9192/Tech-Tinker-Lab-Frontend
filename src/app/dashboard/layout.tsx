import DashboardSidebar from '@/components/ui/DashboardSidebar';
import { getCurrentUser } from '@/services/authService';
import { ILayoutProps } from '@/types/global.type';
import React, { use } from 'react';

async function DashboardLayout({ children }: ILayoutProps) {
  const user = await getCurrentUser();
  return (
    <div className="lg:flex h-screen">
      <div className="w-[15%] hidden lg:block">
        <DashboardSidebar userRole={user?.role!} />
      </div>
      <div className=" lg:w-[75%] p-2 md:p-10">{children}</div>
    </div>
  );
}

export default DashboardLayout;
