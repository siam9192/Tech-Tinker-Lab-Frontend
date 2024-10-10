'use client'
import BarChart from '@/components/chart/BarChart'
import React from 'react'

interface IProps {
   title:string
   data:{
    month:string,
    value:number
   }[]
}


function OverviewBarChart({title,data}:IProps) {
    const labels = data.map(item=>item.month)
    const dataset = {
         label:title,
         data:data.map(item=>item.value),
         backgroundColor:[
            'rgba(255, 99, 132, 0.7)',  // Light Red
            'rgba(54, 162, 235, 0.7)',  // Light Blue
            'rgba(255, 206, 86, 0.7)',  // Light Yellow
            'rgba(75, 192, 192, 0.7)',  // Light Teal
            'rgba(153, 102, 255, 0.7)', // Light Purple
            'rgba(255, 159, 64, 0.7)',  // Light Orange
            'rgba(255, 99, 71, 0.7)',   // Tomato
            'rgba(34, 139, 34, 0.7)',   // Forest Green
            'rgba(100, 149, 237, 0.7)', // Cornflower Blue
            'rgba(218, 112, 214, 0.7)', // Orchid
            'rgba(255, 140, 0, 0.7)',   // Dark Orange
            'rgba(70, 130, 180, 0.7)'   // Steel Blue
          ],
         borderColor:[
            'rgba(255, 99, 132, 0.7)',  // Light Red
            'rgba(54, 162, 235, 0.7)',  // Light Blue
            'rgba(255, 206, 86, 0.7)',  // Light Yellow
            'rgba(75, 192, 192, 0.7)',  // Light Teal
            'rgba(153, 102, 255, 0.7)', // Light Purple
            'rgba(255, 159, 64, 0.7)',  // Light Orange
            'rgba(255, 99, 71, 0.7)',   // Tomato
            'rgba(34, 139, 34, 0.7)',   // Forest Green
            'rgba(100, 149, 237, 0.7)', // Cornflower Blue
            'rgba(218, 112, 214, 0.7)', // Orchid
            'rgba(255, 140, 0, 0.7)',   // Dark Orange
            'rgba(70, 130, 180, 0.7)'   // Steel Blue
          ],
    }
   
  return (
    <div className='p-10 bg-white dark:bg-dark-light '>
        <h1 className='text-2xl font-medium dark:text-white mb-2:'>{title}</h1>
        <BarChart labels={labels}  dataset={dataset}/>
    </div>
  )
}

export default OverviewBarChart