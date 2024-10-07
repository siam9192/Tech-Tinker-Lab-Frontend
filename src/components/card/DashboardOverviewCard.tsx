import React from 'react';
import { IconType } from 'react-icons';
import OverViewCardContainer from '../container/OverviewCardContainer';

interface IDashboardOverviewCardProps {
  data: {
    title: string;
    icon: IconType;
    value: string | number;
  };
}

const DashboardOverviewCard = ({ data }: IDashboardOverviewCardProps) => {
  return (
    <OverViewCardContainer>
      <div className="min-h-32">
        <div className="flex  justify-between">
          <h6 className="text-xl font-medium dark:text-slate-50">
            {data.title}
          </h6>
          <span className="p-2 bg-primary-color  rounded-full text-white">
            <data.icon />
          </span>
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-3xl text-gray-900 dark:text-slate-100 font-medium mb-4">
            {data.value}
          </h3>
        </div>
      </div>
    </OverViewCardContainer>
  );
};

export default DashboardOverviewCard;
