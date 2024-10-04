import React from 'react'
import { FaPlus } from 'react-icons/fa'

function PostCreateModalOpenButton() {
  return (
   <div className='flex flex-col justify-center items-center'>
     <div className='text-2xl md:text-4xl w-fit p-3 md:p-4 bg-primary-color text-white rounded-full'>
        <FaPlus  />
   </div>
   <h2 className='font-medium text-center mt-2 text-primary-color dark:text-white'>Create a Post</h2>
   
   </div>
       
  )
}

export default PostCreateModalOpenButton