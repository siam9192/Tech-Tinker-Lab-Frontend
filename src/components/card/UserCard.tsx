import ManageUserButtons from '@/sub-compomnents/dashboard/manage-users/ManageUserButtons'
import { IUser } from '@/types/user.type'
import { default_profile_photo } from '@/utils/constant'
import React, { use } from 'react'

interface IUserCard  {
    user:IUser
}

function UserCard({user}:IUserCard) {
    const personal_details = user.personal_details
    const name = personal_details.name.first_name +' '+ (personal_details.name.last_name||'')
    
  return (
    <div className="p-5 py-10 md:p-10 bg-white dark:bg-dark-light dark:bg-dark-light-primary shadow relative">
    <div className="flex items-center gap-4">
      <img
        className=" size-14 md:size-20 rounded-full"
        src={user.profile_photo ||default_profile_photo}
        alt=""
      />
      <div className="space-y-1">
      <h3 className=" text-xl font-medium dark:text-slate-50">
          {user.username} {user.is_verified && <span className='p-1 bg-blue-600 text-white text-[0.6rem] rounded-full'>Verified</span>}
        </h3>
        <h3 className=" text-xl md:text-2xl font-medium dark:text-slate-50">
          {name}{' '}
        </h3>
        <h3 className=" text-[0.9rem] md:text-xl font-medium dark:text-slate-50">
          {user.email}
        </h3>
      </div>
    </div>
    <ManageUserButtons user={user}/>
    <span
      className={`absolute top-2 md:top-4  right-2 text-[0.9rem] text-white px-4 py-2 ${user.role === 'user' ? 'bg-green-500' : 'bg-primary-color'} rounded-full`}
    >
      {user.role.toUpperCase()}
    </span>
  </div>
  )
}

export default UserCard