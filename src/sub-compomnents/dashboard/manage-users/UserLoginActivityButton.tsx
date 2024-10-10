'use client';
import Modal from '@/components/modal/Modal'
import UserLoginActivity from '@/sections/dashboard/manage-users/UserLoginActivity'
import React, { useState } from 'react'
interface  IUserLoginActivity {
    userId:string
}
function UserLoginActivityButton({userId}:IUserLoginActivity) {
    const [isOpen,setIsOpen] = useState(false)

    const close = ()=>setIsOpen(false)
  return (
  <>
    <button onClick={()=>setIsOpen(true)}  className="px-4 py-2 bg-black dark:bg-white rounded-full dark:text-black text-white">Login Activity</button>
    {
        isOpen && <Modal closeFn={close} isOpen={isOpen}>
        <div className='  w-full md:w-[80%] lg:w-1/2 min-h-52 bg-white'>
        <UserLoginActivity  userId={userId}/>
        </div>
       </Modal>
    }
  </>
  )
}

export default UserLoginActivityButton