import DashboardOverviewCard from '@/components/card/DashboardOverviewCard';
import OverviewBarChart from '@/sections/dashboard/admin-overview/OverViewBarChart';
import { getCurrentUserData } from '@/services/authService';
import { getAdminOverview } from '@/services/overviewService';
import React from 'react'
import { FaDollarSign, FaUsers } from 'react-icons/fa';
import { IoAlbumsOutline } from 'react-icons/io5';



async function page() {
    let currentUser;
    let overviewData;
    try {
      
      currentUser = await getCurrentUserData();
      overviewData = await getAdminOverview()
    } catch (error) {
        
    }
  
    const fullName =
      currentUser?.personal_details.name.first_name +
      ' ' +
      (currentUser?.personal_details.name.last_name || '');

      const revenueOverviewData = overviewData?.monthsData.map((item)=>(
        {
          month:item.month,
          value:item.revenue
        }
      ))
      const paymentOverviewData = overviewData?.monthsData.map((item)=>(
        {
          month:item.month,
          value:item.payments
        }
      ))
      const postOverviewData = overviewData?.monthsData.map((item)=>(
        {
          month:item.month,
          value:item.posts
        }
      ))
      const userActivitiesOverviewData = overviewData?.monthsData.map((item)=>(
        {
          month:item.month,
          value:item.user_activities
        }
      ))
     
      const currentYear =  new Date().getFullYear()
    return (
      <div>
        <h1 className="text-4xl font-bold dark:text-white">
          <span className=" text-info-color dark:text-primary-color">Hello</span>,
          {fullName}
        </h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <DashboardOverviewCard
            data={{
              title: 'Total Posts',
              icon: IoAlbumsOutline,
              value: overviewData?.total_post || 0,
            }}
          />
          <DashboardOverviewCard
            data={{
              title: 'Total User',
              icon: FaUsers,
              value: overviewData?.total_user || 0,
            }}
          />
          <DashboardOverviewCard
            data={{
              title: 'Total Revenue',
              icon: FaDollarSign,
              value: overviewData?.total_revenue || 0,
            }}
          />
             <DashboardOverviewCard
            data={{
              title: 'Total Subscription',
              icon: FaDollarSign,
              value: overviewData?.total_subscription || 0,
            }}
          />
             
        </div>
        <div className='mt-10 grid grid-cols-1  lg:grid-cols-2 gap-5'>
        <OverviewBarChart title={`Months Post OF ${currentYear}`} data={postOverviewData!}/>
        <OverviewBarChart title={`Months Activities OF ${currentYear}`} data={userActivitiesOverviewData!}/>
        </div>
        <div className='mt-10'>
          <OverviewBarChart title={`Months Revenue OF ${currentYear}`} data={revenueOverviewData!}/>
        </div>
        <div className='mt-10'>
          <OverviewBarChart title={`Months Payment OF ${currentYear}`} data={paymentOverviewData!}/>
        </div>
      </div>
    );
  }
  

export default page