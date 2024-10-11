import DashboardOverviewCard from '@/components/card/DashboardOverviewCard';
import { getCurrentUserData } from '@/services/authService';
import { getCurrentUserOverview } from '@/services/overviewService';
import React from 'react';
import { FaMessage } from 'react-icons/fa6';
import { IoAlbumsOutline } from 'react-icons/io5';
import { MdAddReaction } from 'react-icons/md';
import { PiPackageFill } from 'react-icons/pi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

async function page() {
  let currentUser;
  let overviewData;
  try {
    currentUser = await getCurrentUserData();
    overviewData = await getCurrentUserOverview();
  } catch (error) {}

  const fullName =
    currentUser?.personal_details.name.first_name +
    ' ' +
    (currentUser?.personal_details.name.last_name || '');
    
  return (
    <div>
      <h1 className="text-4xl font-bold dark:text-white">
        <span className=" text-info-color dark:text-primary-color">Hello</span>,
        {fullName}
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <DashboardOverviewCard
          data={{
            title: 'Total Post',
            icon: IoAlbumsOutline,
            value: overviewData?.total_post || 0,
          }}
        />
        <DashboardOverviewCard
          data={{
            title: 'Total Reactions',
            icon: MdAddReaction,
            value: overviewData?.total_reaction || 0,
          }}
        />
        <DashboardOverviewCard
          data={{
            title: 'Total Earning',
            icon: RiMoneyDollarCircleLine,
            value: overviewData?.total_earning || 0,
          }}
        />
        <DashboardOverviewCard
          data={{
            title: 'Total Comment',
            icon: FaMessage,
            value:overviewData?.total_comment||0,
          }}
        />
      </div>
    </div>
  );
}

export default page;
