import { useGetUserLoginActivities } from '@/hooks/user.hook'
import React from 'react'

interface  IUserLoginActivity {
    userId:string
   
}

function UserLoginActivity({userId}:IUserLoginActivity) {
     const {data} = useGetUserLoginActivities(userId)
    const activities = data?.login_activities.reverse()
  return (
    <div className='p-2'>
        <h1 className='text-center text-2xl font-medium'>({data?.username}) Login Activities</h1> 
        <div className='mt-2'>
           <ul>
           {
                activities?.map(activity=>(
                    <li className='p-2 border'>
                        <h2 className='text-2xl'>
                            {new Date(activity.login_date).toUTCString()}
                        </h2>
                    </li>
                ))
            }
           </ul>
        </div>
    </div>
  )
}

export default UserLoginActivity