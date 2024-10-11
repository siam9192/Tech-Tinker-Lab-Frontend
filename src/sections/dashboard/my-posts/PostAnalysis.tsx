'use client';
import React, { useEffect, useState } from 'react';
import PostAnalysisOverviewCards from './PostAnalysisOverviewCards';
import { useGetPostOverview } from '@/hooks/overview.hook';
import { FaBookReader } from 'react-icons/fa';
import PostAnalysisFilterTab from './PostAnalysisFilterTab';
import LineChart from '@/components/chart/LineChart';
import { LuDollarSign } from 'react-icons/lu';
import { MdOutlineAddReaction } from 'react-icons/md';

interface IPostAnalysisProps {
  postId: string;
}

function PostAnalysis({ postId }: IPostAnalysisProps) {
  const [viewType, setViewType] = useState('month');
  const { data, isLoading, refetch } = useGetPostOverview(postId, viewType);

  useEffect(() => {
    refetch();
  }, [viewType]);

  const cardsData = [
    {
      title: 'Total Read',
      value: data?.total_read || 0,
      icon: FaBookReader,
    },
    {
      title: 'Total earning',
      value: data?.total_earning || 0,
      icon: LuDollarSign,
    },
    {
      title: 'Total Reaction',
      value: data?.total_reaction || 0,
      icon: MdOutlineAddReaction,
    },
    {
      title: 'Total Reader',
      value: data?.total_reader || 0,
      icon: FaBookReader,
    },
  ];
  
  const labels =
    data?.readers_summery?.map((item) => {
      let label = item.month?.slice(0, 3) || item.day;
      if (item.upcoming) {
        label += '(Upcoming)';
      }
      return label;
    }) || [];

  const datasetResources = [
    {
      title: 'Comments Summery',
      data: data?.readers_summery || [],
      borderColor: '#219C90',
    },
    {
      title: 'Readers Summery',
      data: data?.readers_summery || [],
      borderColor: '#FFF455',
    },
    {
      title: 'Reactions Summery',
      data: data?.reactions_summery || [],
      borderColor: '#EE4E4E',
    },
  ];

  const chartData = {
    labels,
    datasets: datasetResources.map((item) => ({
      label: item.title,
      data: item.data.map((i) => i.value),
      borderColor: item.borderColor,
      fill: true,
      tension: 0.4,
    })),
  };

  const handelTabOnChange = (tab: string) => {
    setViewType(tab);
  };

  return (
    <section>
      <PostAnalysisFilterTab onChange={handelTabOnChange} />
      <PostAnalysisOverviewCards data={cardsData} isLoading={isLoading} />
      <div className="md:h-[40vh] h-72">
        <LineChart
          data={chartData as any}
          options={{ title: 'Post Summery' }}
        />
      </div>
    </section>
  );
}

export default PostAnalysis;
