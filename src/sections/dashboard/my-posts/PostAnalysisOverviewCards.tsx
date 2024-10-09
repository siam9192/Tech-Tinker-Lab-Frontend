'use clients';
import DashboardOverviewCard from '@/components/card/DashboardOverviewCard';
import React from 'react';
import { IconType } from 'react-icons';

interface IPostAnalysisOverviewCardsProps {
  data: {
    title: string;
    icon: IconType;
    value: string | number;
  }[];
  isLoading: boolean;
}

function PostAnalysisOverviewCards({
  data,
  isLoading,
}: IPostAnalysisOverviewCardsProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 md:p-10 ">
      {data.map((item) => (
        <DashboardOverviewCard data={item} key={item.title} />
      ))}
    </section>
  );
}

export default PostAnalysisOverviewCards;
