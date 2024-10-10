'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

type TDataSet = {
  label:string,
  data:number[],
  backgroundColor:string[],
  borderColor:string[]
}

interface IBarChartProps {
  labels:(string|number)[],
  dataset:TDataSet
}

const BarChart = ({labels,dataset}:IBarChartProps) => {
  const data = {
    labels: labels,
    datasets: [
      dataset
    ],
    
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      // title: {
      //   display: true,
      //   text: 'Monthly Sales (2023)',
      // },
    },
  };

  return (
    <div >
      <Bar data={data} options={options as any} />
    </div>
  );
};

export default BarChart;
