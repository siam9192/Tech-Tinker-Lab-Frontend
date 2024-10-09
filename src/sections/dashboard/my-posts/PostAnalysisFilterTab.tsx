import React, { useState } from 'react';

interface ITab {
  onChange: (tab: string) => void;
}

function PostAnalysisFilterTab({ onChange }: ITab) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: 'This Month',
      value: 'month',
    },
    {
      title: 'This Year',
      value: 'year',
    },
  ];

  const handelSelectTab = (index: number) => {
    setActiveTab(index);
    onChange(tabs[index].value);
  };

  return (
    <section className="p-5 flex items-center gap-2">
      {tabs.map((tab, i) => (
        <button
          onClick={() => handelSelectTab(i)}
          className={`text-xl font-bold ${activeTab === i ? 'text-primary-color' : 'text-black dark:text-white'} hover:scale-110 duration-100 ease-in-out`}
        >
          {tab.title}
        </button>
      ))}
    </section>
  );
}

export default PostAnalysisFilterTab;
