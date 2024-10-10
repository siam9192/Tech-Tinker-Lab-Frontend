
import { IUserActivity } from '@/types/user-activity.type'
import React from 'react'

function UserActivityTable({activities}:{activities:IUserActivity[]}) {
    const tableHeads = [
        'Username',
        'Email',
        'Action',
        'Browser',
        'Ip',
        'Date',
        'Time'
    ]
   
  return (
    <div className="overflow-x-auto   ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        {
            tableHeads.map(head=><th key={head} className=' text-primary-color text-xl '>{head}</th>)
        }
      
      </tr>
    </thead>
    <tbody>
   
      {
        activities.map(activity=>(
            <tr key={activity._id} className='hover:bg-dark-mode py-4'>
        <th className='text-xl'>{activity.user.username}</th>
        <td className='text-xl'>{activity.user.email}</td>
        <td className={`text-xl ${activity.type === 'Login'?'text-green-500':'text-pink-600'}`}>{activity.type}</td>
        <td className='text-xl'>{activity.browser}</td>
        <td className='text-xl'>{activity.ip_address}</td>
        <td className='text-xl'>{new Date(activity.createdAt).toDateString()}</td>
        <td className='text-xl'>{new Date(activity.createdAt).toLocaleTimeString()}</td>
      </tr>
        ))
      }
   
    </tbody>
  </table>
</div>
  )
}

export default UserActivityTable