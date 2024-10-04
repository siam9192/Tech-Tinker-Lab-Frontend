import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoSearch } from 'react-icons/io5'

function Searchbox() {
  return (
     <div className='flex items-center gap-2 p-2 border-2 border-primary-color rounded-full bg-gray-100'>
         <input type="text" placeholder='Search here...' className='w-72 bg-gray-100  outline-none dark:text-white'/>
         <span className='text-2xl text-button-color'>
         <IoSearch />
         </span>
     </div>
  )
}

export default Searchbox