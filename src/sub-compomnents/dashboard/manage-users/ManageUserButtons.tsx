import React, { use } from 'react'
import UserLoginActivityButton from './UserLoginActivityButton'
import { IUser } from '@/types/user.type'
import { errorToast, successToast } from '@/utils/toast'
import { changeUserBlockStatus, changeUserRole } from '@/services/userService'
import { useQueryClient } from '@tanstack/react-query'



function ManageUserButtons({user}:{user:IUser}) {
    const queryClient = useQueryClient()
   const changeRole = async (role:string)=>{
   
   try {
    await changeUserRole({user_id:user._id,role})
    successToast('Role Changed successfully')
    queryClient.invalidateQueries(['USERS'])
   } catch (error:any) {
    errorToast(error.message)
   }
  }

  const changeBlockStatus = async (status:boolean)=>{
    try {
     await changeUserBlockStatus ({user_id:user._id,status})
     successToast(`${status?'Blocked':'Unblocked'}Role Changed successfully`)
     queryClient.invalidateQueries(['USERS'])
    } catch (error:any) {
     errorToast(error.message)
    }
   }

  return (
 <div className='mt-5 flex justify-end items-center gap-2 flex-wrap'>
       <>
    {user.role.toLowerCase() !== 'admin' ? (
      <button
        onClick={()=>changeRole('ADMIN')}
        className="px-4 py-2 bg-info-color rounded-full text-white"
      >
        Make Admin
      </button>
    ) : (
      <button
      onClick={()=>changeRole('USER')}
        className="px-4 py-2 bg-button-color rounded-full text-white"
      >
        Make User
      </button>
    )}
  </>
  <>
   {
    !user.is_blocked ?
    <button onClick={()=>changeBlockStatus(true)} className="px-4 py-2 bg-pink-600 rounded-full text-white"
    >
      Block User
      </button>
      :
      <button onClick={()=>changeBlockStatus(false)} className="px-4 py-2  bg-amber-400 rounded-full text-white"
      >
        Unblock User
        </button>
   }
    </>
 </div>
  )
}

export default ManageUserButtons