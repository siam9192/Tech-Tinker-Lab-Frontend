'use client';
import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import Modal from '../modal/Modal'
import ProfileEditForm from './ProfileEditForm'

function EditProfileButton() {
  const [isOpen,setIsOpen] = useState(false)

  const open = ()=>{
    setIsOpen(true)
  }

  const close = ()=>{
    setIsOpen(false)
  }
    return (
     <>
        <button onClick={open} className='flex items-center justify-center gap-1 px-4 py-2 bg-button-color hover:bg-primary-color rounded-full duration-200 text-white text-xl w-1/2 '>
         {
          <FaRegEdit />
         }
         <span>Edit Profile</span>
        </button>

        <Modal  isOpen={isOpen} closeFn={close}>
         <div onClick={(e)=>e.stopPropagation()}  className="bg-white dark:bg-dark-mode w-full md:w-10/12 lg:w-1/2 p-5 md:p-10  rounded-lg h-[80vh] overflow-auto">
         <ProfileEditForm/>
         </div>
        </Modal>
     </>
  )
}

export default EditProfileButton